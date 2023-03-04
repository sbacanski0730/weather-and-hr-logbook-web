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

// TODO: move this function to auth context
const handleLogin = (email, password) => {
	console.log(email);
	console.log(password);
};

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
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

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
								onClick={() => handleLogin(email, password)}
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
