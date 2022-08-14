import React, { useState } from 'react';
import { RegisterPageStyle } from './RegisterPage.style';
import Button from '../../components/Button/Button';

const RegisterPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	return (
		<RegisterPageStyle>
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
					<input
						type='password'
						placeholder='Repeat Password'
						onChange={e => setRepeatPassword(e.target.value)}
					/>
				</div>
				<Button btn_style='default' btn_size='wide' btn_hover='default'>
					Sign up
				</Button>
			</div>
		</RegisterPageStyle>
	);
};

export default RegisterPage;
