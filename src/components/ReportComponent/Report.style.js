import styled from 'styled-components';

export const ReportStyle = styled.div`
	/* border: 1px solid red; */
	border: 1px solid rgba(100, 100, 100, 0.5);

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0.4rem;
	/* white-space: nowrap; */
	margin-bottom: 0.3rem;
	cursor: default;

	&:hover {
		border: 1px solid rgba(0, 0, 0, 0.8);
	}

	.element {
		/* border: 1px solid black; */
		/* height: 100%; */
		/* width: 100%; */
		display: flex;
		align-items: center;
		white-space: nowrap;
		font-size: 1.5rem;
	}

	.content {
		/* border: 1px solid black; */

		max-width: 500px;
		text-overflow: ellipsis;
		overflow: hidden;
		display: inline-block;
	}
`;
