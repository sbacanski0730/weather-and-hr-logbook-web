import React from 'react';
import { ButtonStyle } from './Button.style';

const Button = ({ children, btn_style, btn_size, btn_hover }) => {
	const STYLES = ['default', 'no-outline'];
	const SIZES = ['default', 'wide'];
	const HOVERS = ['default', 'underline'];

	const checkPropStyle = STYLES.includes(btn_style) ? btn_style : STYLES[0];
	const checkPropSize = SIZES.includes(btn_size) ? btn_size : SIZES[0];
	const checkPropHover = HOVERS.includes(btn_hover) ? btn_hover : HOVERS[0];

	return (
		<>
			<ButtonStyle
				btn_style={checkPropStyle}
				btn_size={checkPropSize}
				btn_hover={checkPropHover}
			>
				{children}
			</ButtonStyle>
		</>
	);
};

export default Button;
