import styled, { css } from 'styled-components';

export const ButtonStyle = styled.button`
	font-size: 1.5rem;
	font-family: 'Montserrat', sans-serif;
	outline: none;
	border: none;
	background: none;

	${({ btn_style }) => {
		if (btn_style === 'default') {
			return css`
				background-color: orange;
			`;
		}
	}};

	${({ btn_size }) => {
		if (btn_size === 'no-outline') {
			return css`
				background-color: blue;
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
	}}
`;
