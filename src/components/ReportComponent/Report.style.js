import styled, { css } from 'styled-components';

export const ReportStyle = styled.div`
	/* border: 1px solid black; */
	box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
	border: 1px solid transparent;
	width: 100%;
	display: flex;
	flex-direction: row;
	padding: 0.4rem 0.8rem;
	cursor: default;
	user-select: none;

	transition: all 0.2s ease;

	&:hover {
		box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.9);
	}

	.report-data {
		flex: 2;

		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.4s ease;
		p,
		.icon {
			padding: 0 0.5rem;
			font-size: 1.3rem;
			white-space: nowrap;
		}
	}

	.report-content {
		flex: 3;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		height: 100%;
		overflow: hidden;

		p {
			width: 90%;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			font-size: 1.3rem;
			padding-left: 0.9rem;
		}
	}

	.left-icons {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding-top: 0.2rem;

		.edit-icon {
			font-size: 1.2rem;

			&:hover {
				cursor: pointer;
			}
		}

		#icon {
			display: none;
		}
	}

	${({ isOpen }) => {
		if (isOpen) {
			return css`
				&:hover {
					border: 1px solid transparent;
				}

				.report-data {
					flex-direction: column;
					align-items: flex-start;

					p,
					.icon {
						/* TODO: to style; */
						/* margin: 0.4rem 0; */
					}
				}

				.report-content {
					align-items: center;
					justify-content: flex-start;

					p {
						width: 100%;
						padding: 1rem 1rem;
						white-space: normal;
						text-align: left;
						text-justify: inter-word;
						line-height: 1.5;
						font-size: 1.2rem;
					}
				}

				.left-icons {
					align-items: center;
					justify-content: flex-start;
					gap: 1rem;

					#icon {
						display: block;
					}
				}
			`;
		}
	}}
`;
