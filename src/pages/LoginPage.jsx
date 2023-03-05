import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ReactLink } from 'react-router-dom';
import { styled } from '@mui/material';
import {
	Container,
	Paper,
	TextField,
	Box,
	Typography,
	Button,
	Grid,
	Link,
} from '@mui/material';
import { APP_ROUTES } from '../utils/constants';
import { API_ROUTES } from '../utils/constants';
import { authenticateUserToken, isValidateLogin } from '../utils/authFunction';

const CustomTextField = styled(TextField)(({ theme }) => ({
	// do tego napisu nad inputem
	'& label': {
		'&.Mui-focused': {
			color: theme.palette.text.secondary,
		},
	},

	// kolor border static
	'& fieldset': {
		borderRadius: 0,
		borderColor: theme.palette.secondary.main,
	},

	// kolor border do :hover
	'& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
		borderColor: theme.palette.secondary.dark,
	},

	// do bordera na focus
	'& .Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderWidth: '1px',
		borderColor: theme.palette.secondary.dark,
	},
}));

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [infoContent, setInfoContent] = useState('');

	useEffect(() => {
		const authenticateForLoginPage = async () => {
			const { verify } = await authenticateUserToken();

			if (verify) {
				navigate('/');
			} else {
				localStorage.removeItem('token');
			}
		};
		authenticateForLoginPage();
	}, []);

	const handleLogin = async () => {
		try {
			if (isValidateLogin(email, password)) {
				const response = await fetch(API_ROUTES.LOGIN, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Request-Headers': 'token',
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				});

				if (!response.ok) {
					const { message } = await response.json();
					setInfoContent(message);
					setTimeout(() => {
						setInfoContent('');
					}, 5000);
				}
				if (response.ok) {
					const { status, message } = await response.json();
					if (status) {
						localStorage.setItem('token', response.headers.get('token'));
						navigate(APP_ROUTES.HOME);
					}
					if (!status) {
						setInfoContent(message);
						setPassword('');
						setTimeout(() => {
							setInfoContent('');
						}, 5000);
					}
				}
			}
		} catch (err) {
			setInfoContent(err);
			setTimeout(() => {
				setInfoContent('');
			}, 5000);
		}
	};

	return (
		<Container
			maxWidth={false}
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				bgcolor: 'secondary.light',
			}}
		>
			<Container maxWidth='xs'>
				<Paper
					elevation={10}
					sx={{
						px: 3,
						py: 3,
						borderRadius: 0,
						bgcolor: 'primary.light',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Typography
							component='h1'
							variant='h1'
							sx={{ userSelect: 'none' }}
							noWrap
						>
							Sign In
						</Typography>
						<Box
							component='form'
							sx={{
								mt: 1,
							}}
						>
							<CustomTextField
								required
								fullWidth
								margin='normal'
								label='Email'
								type='text'
								onChange={e => setEmail(e.target.value)}
							/>
							<CustomTextField
								required
								fullWidth
								margin='normal'
								label='Password'
								type='password'
								onChange={e => setPassword(e.target.value)}
							/>
							{infoContent && (
								<Typography
									variant='subtitle2'
									sx={{
										m: 0,
										px: 1,
										color: '#ff0000',
										boxShadow: 'none',
									}}
								>
									{infoContent}
								</Typography>
							)}
							<Button
								variant='contained'
								fullWidth
								sx={{
									mt: 3,
									mb: 2,
									color: 'customButtonAuthTextColors.primary',
									bgcolor: 'secondary.dark',
									boxShadow: 'none',
									'&:hover': { boxShadow: 'none' },
								}}
								onClick={() => handleLogin()}
							>
								Login
							</Button>
							<Grid container direction='column' spacing={'4px'}>
								<Grid item xs>
									<Link
										component={ReactLink}
										to='/'
										variant='h5'
										underline='hover'
										color='authLinkColor.main'
										noWrap
										sx={{
											display: 'flex',
											justifyContent: 'flex-end',
											'&:hover': {
												textDecorationColor: 'secondary.light',
											},
										}}
									>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link
										component={ReactLink}
										to='/register'
										variant='h5'
										underline='hover'
										color='authLinkColor.main'
										sx={{
											display: 'flex',
											justifyContent: 'flex-end',
										}}
									>
										Don't have an account? Register
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Paper>
			</Container>
		</Container>
	);
};

export default LoginPage;
