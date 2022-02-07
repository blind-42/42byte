import styled from 'styled-components';

export const AppContainer = styled.div``;

export const Left = styled.div``;

export const Right = styled.div`
	
	@media screen and (min-width: 768px) {
	margin-left: 10vw;
	}
`;

export const MainContainer = styled.div`
	padding: 3vh 8vw 5vh 8vw;
	@media screen and (min-width: 768px) {
		padding: 5vh 8vw 5vh 8vw;
	}
`;

export const Title = styled.div`
	padding-bottom: 2vh;

	.boardName {
		display: inline-block;
		font-weight: bolder;
		font-size: 1.2rem;
		letter-spacing: 0.1rem;
	}
`;

///Table
export const TableWrap = styled.div`
	border: solid 2px black;
`;

export const Category = styled.div`
	display: none;

	@media screen and (min-width: 768px) {
		display: flex;
		text-align: center;
		border-bottom: solid 2px black;
		background: #E5E5E5;
		.left {
			flex: 6;
			padding: 1vh;
		}
		.right {
			flex: 4;
			display: flex;
			padding: 1vh;
			.view {
				flex: 2;
			}
			.thumsup {
				flex: 2;
			}
			.writer {
				flex: 3;
			}
			.createdat {
				flex: 3;
			}
	}
}
`;

export const TableList = styled.div`
`;
