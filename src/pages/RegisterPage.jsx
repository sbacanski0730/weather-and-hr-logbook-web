import React, { useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
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

// TODO: move this function to auth context
const handleRegister = (email, password, repeatPassword) => {
	console.log(email);
	console.log(password);
	console.log(repeatPassword);
};

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');

	return (
		// this Container cover all page
		<Container
			sx={{
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
						<Typography component='h1' variant='h1'>
							Sign Up
						</Typography>
						<Box component='form' sx={{ mt: 1 }}>
							<TextField
								required
								margin='normal'
								label='Email Address'
								type='text'
								fullWidth
								onChange={e => {
									setEmail(e.target.value);
								}}
							/>
							<TextField
								required
								margin='normal'
								label='Password'
								type='password'
								fullWidth
								onChange={e => {
									setPassword(e.target.value);
								}}
							/>
							<TextField
								required
								margin='normal'
								label='Repeat Password'
								type='password'
								fullWidth
								onChange={e => {
									setRepeatPassword(e.target.value);
								}}
							/>
							<Button
								variant='contained'
								fullWidth
								sx={{ mt: 3, mb: 2 }}
								onClick={() =>
									handleRegister(email, password, repeatPassword)
								}
							>
								Register
							</Button>
							<Grid container sx={{ justifyContent: 'flex-end' }}>
								<Grid item>
									<Link variant='h5' component={ReactLink} to='/login'>
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
