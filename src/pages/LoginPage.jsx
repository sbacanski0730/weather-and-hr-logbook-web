import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
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

// TODO: move this function to auth context
const handleLogin = (email, password) => {
	console.log(email);
	console.log(password);
};

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<Container
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<Container maxWidth='xs'>
				<Paper elevation={10} sx={{ px: 3, py: 3 }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Typography
							// component='h1'
							variant='h3'
						>
							Sign In
						</Typography>
						<Box
							component='form'
							sx={{
								mt: 1,
							}}
						>
							<TextField
								required
								fullWidth
								margin='normal'
								label='Email'
								type='text'
								onChange={e => setEmail(e.target.value)}
							/>
							<TextField
								required
								fullWidth
								margin='normal'
								label='Password'
								type='password'
								onChange={e => setPassword(e.target.value)}
							/>
							<Button
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								onClick={() => handleLogin(email, password)}
							>
								Login
							</Button>
							<Grid container>
								{/* TODO: add functionality to this */}
								{/* this is link "empty" - work in progress  */}
								<Grid item xs>
									<Link //
										component={ReactLink}
										to='/'
										variant='body2'
									>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link
										component={ReactLink}
										to='/register'
										variant='body2'
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
