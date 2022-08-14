import styled from 'styled-components';

export const RegisterPageStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #fff;

	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 2rem 2.5rem;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
		width: 30vw;

		.inputs-container {
			width: 100%;
			display: flex;
			flex-direction: column;
			margin-bottom: 1.5rem;

			input {
				outline: none;
				border: none;

				box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
				font-size: 1.4rem;

				margin: 0.7rem 0;
				padding-left: 1rem;
				height: 50px;
				width: 100%;
			}
		}
	}
`;
