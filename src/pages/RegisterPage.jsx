import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as ReactLink } from 'react-router-dom';
import { styled } from '@mui/material';
import {
	Container,
	Grid,
	Box,
	Paper,
	TextField,
	Button,
	Typography,
	Link,
} from '@mui/material';
import { APP_ROUTES } from '../utils/constants';
import { API_ROUTES } from '../utils/constants';

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

const RegisterPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	useEffect(() => {
		if (localStorage.getItem('token')) {
			navigate(APP_ROUTES.HOME);
		}
	}, []);

	// TODO: move this function to auth context
	const handleRegister = async () => {
		console.log(email);
		console.log(password);
		console.log(API_ROUTES.REGISTER);

		const response = await fetch(API_ROUTES.REGISTER, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});

		const data = await response.json();

		console.log(data);
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
							Sign Up
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
								label='Email Address'
								type='text'
								onChange={e => {
									setEmail(e.target.value);
								}}
							/>
							<CustomTextField
								required
								fullWidth
								margin='normal'
								label='Password'
								type='password'
								onChange={e => {
									setPassword(e.target.value);
								}}
							/>
							<CustomTextField
								required
								fullWidth
								margin='normal'
								label='Repeat Password'
								type='password'
								onChange={e => {
									setRepeatPassword(e.target.value);
								}}
							/>
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
								onClick={() => handleRegister()}
							>
								Register
							</Button>
							<Grid container sx={{ justifyContent: 'flex-end' }}>
								<Grid item>
									<Link
										component={ReactLink}
										to='/login'
										variant='h5'
										underline='hover'
										color='authLinkColor.main'
										sx={{
											display: 'flex',
											justifyContent: 'flex-end',
										}}
									>
										Already have an account? Login
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

export default RegisterPage;
