import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import { LoginPageStyle } from './LoginPage.style';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<LoginPageStyle>
			<div className='wrapper'>
				<div className='inputs-container'>
					<input
						type='text'
						placeholder='Email'
						onChange={e => setEmail(e.target.value)}
					/>

					<input
						type='password'
						placeholder='Password'
						onChange={e => setPassword(e.target.value)}
					/>
				</div>
				<Button btn_style='default' btn_size='wide' btn_hover='default'>
					Sign in
				</Button>
			</div>
		</LoginPageStyle>
	);
};

export default LoginPage;
