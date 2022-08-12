import React from 'react';
import { ButtonStyle } from './Button.style';

const Button = ({ children }) => {
	return (
		<>
			<ButtonStyle>{children}</ButtonStyle>
		</>
	);
};

export default Button;
