import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button`
	font-family: 'Montserrat', sans-serif;
	outline: none;
	border: none;
	background: none;

	${({ btn_style }) => {
		if (btn_style === 'default') {
			return css`
				font-size: 1.3rem;
				border: 1px solid #d9d9d9;
				border-radius: 5px;
			`;
		}
		if (btn_style === 'no-outline') {
			return css`
				border: none;
				font-size: 1.3rem;
			`;
		}
	}};

	${({ btn_size }) => {
		if (btn_size === 'default') {
			return css`
				padding: 0.2rem 0.9rem;
			`;
		}
		if (btn_size === 'wide') {
			return css`
				width: 100%;
				padding: 0.2rem 0.6rem;
			`;
		}
	}}

	${({ btn_hover }) => {
		if (btn_hover === 'default') {
			return css`
				&:hover {
					cursor: pointer;
				}
			`;
		}
		if (btn_hover === 'underline') {
			return css`
				border: 1px solid transparent;
				border-radius: 0;
				transition: border 0.1s ease-in;
				&:hover {
					cursor: pointer;
					border-bottom: 1px solid #d9d9d9;
				}
			`;
		}
	}}
`;
