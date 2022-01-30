import styled from 'styled-components';

export const TableWrap = styled.div`
	border: solid 2px black;
`;

export const Category = styled.div`
	display: flex;
	text-align: center;
	border-bottom: solid 2px black;
	div {
		padding: 1vh;
		background: #E5E5E5;
	}
	.title {
		flex: 6;
	}
	.view {
		flex: 0.5;
	}
	.thumsup {
		flex: 0.5;
	}
	.writer {
		flex: 1.5;
	}
	.createdat {
		flex: 1.5;
	}
`;

export const TableList = styled.div`
`;
