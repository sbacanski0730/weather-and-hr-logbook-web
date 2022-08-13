import styled from 'styled-components';

export const NavbarStyle = styled.div`
	/* --element-height: 72px; */
	/* --element-width-closed: 142px; */
	/* --element-width-open: 302px; */
	width: 100vw;

	.top {
		background-color: #ffffff;
		width: 100%;
		height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
		padding: 0 2.9rem;

		#logout-container {
			width: 100%;
			display: flex;
			justify-content: flex-end;
		}
	}

	.left {
		background-color: #ffffff;
		padding-top: 72px;
		height: 100vh;
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: column;
		z-index: 98;

		transition: all ease 1s;

		.menu-button {
			width: 100%;
			height: 72px;
			display: flex;
			flex-direction: row;
			/* justify-content: flex-end; */
			/* align-items: center; */
			margin-top: 0;
			background-color: #d9d9d9;

			& > svg {
				font-size: 3rem;
				transition: all ease 2s;
			}
		}

		.element {
			width: 100%;
			height: 72px;
			display: flex;
			flex-direction: row;
			align-items: center;
			margin: 10px 0;
			& > svg {
				font-size: 2.5rem;
				transition: all ease 1s;
			}
			& > p {
				font-size: 1.63rem;
				transition: all ease 1s;
			}

			&:hover {
				cursor: pointer;
				box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
			}
		}
	}

	.closed {
		width: 142px;
		.menu-button {
			justify-content: center;
			align-items: center;
		}
		.element {
			& > svg {
				width: 100%;
			}

			& > p {
				display: none;
			}
		}
	}

	.open {
		width: 302px;
		.menu-button {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;

			& > svg {
				margin-right: 10%;
				font-size: 2.5rem;
			}
		}

		.element {
			& > svg {
				width: 100%;
			}

			& > p {
				width: 100%;
			}
		}
	}
	.active {
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
	}
`;
