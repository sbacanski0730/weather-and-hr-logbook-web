import styled from 'styled-components';

export const NavbarStyle = styled.div`
	/* --element-height: 72px; */
	/* --element-width-closed: 142px; */
	/* --element-width-open: 302px; */
	width: 100vw;
	/* position: absolute; */
	/* left: 0; */
	/* top: 0; */

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
		position: absolute;
		z-index: 98;

		transition: all ease 1s;

		width: 142px;

		.menu-button {
			width: 100%;
			height: 72px;
			display: flex;
			flex-direction: row;

			margin-top: 0;
			background-color: #d9d9d9;

			justify-content: center;
			align-items: center;

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
			justify-content: center;
			margin: 10px 0;

			svg {
				font-size: 2.5rem;
				transition: all ease 1s;
			}

			span {
				position: absolute;
				left: 80%;
				padding: 0.4rem 0.7rem;
				font-size: 1.3rem;
				white-space: nowrap;
				background-color: #ffffff;
				opacity: 0;

				transition: all 0.4s ease;
			}

			&:hover {
				cursor: pointer;
				box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);

				span {
					box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
					left: calc(100% + 15px);
					opacity: 1;
				}
			}
		}
	}

	.closed {
		.menu-button {
			justify-content: center;
			align-items: center;
		}
	}
	.active {
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
	}
`;
