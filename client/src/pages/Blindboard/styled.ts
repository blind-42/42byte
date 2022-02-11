import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
`;

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BoardNameWrap = styled.div`
	display: inline-block;
	font-weight: 700;
	font-size: 1.2rem;
	letter-spacing: 0.1rem;
`;

export const PostList = styled.div`
	border: solid 1px black;
	width: 100vw;
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
	@media screen and (min-width: 768px) {
		height: 60vh;
		width: 80vh;
	}
`;

export const Category = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #E5E5E5;
	height: 4vh;
	border-bottom: 1px solid black;
	div {
		font-size: 1rem;
	}
	.left {
		flex: 5;
		text-align: center;
	}
	.rignt {
		flex: 5;
		display: flex;
		justify-content: space-around;
	}
`;

// export const AppContainer = styled.div``;

// export const MainContainer = styled.div`
// 	padding: 3vh 8vw 5vh 8vw;
// 	@media screen and (min-width: 768px) {
// 		padding: 5vh 8vw 5vh 8vw;
// 	}
// `;

// export const Title = styled.div`
// 	padding-bottom: 2vh;

// 	.boardName {
// 		display: inline-block;
// 		font-weight: bolder;
// 		font-size: 1.2rem;
// 		letter-spacing: 0.1rem;
// 	}
// `;

// ///Table
// export const TableWrap = styled.div`
// 	border: solid 2px black;
// `;

// export const Category = styled.div`
// 	display: none;

// 	@media screen and (min-width: 768px) {
// 		display: flex;
// 		text-align: center;
// 		border-bottom: solid 2px black;
// 		background: #E5E5E5;
// 		.left {
// 			flex: 6;
// 			padding: 1vh;
// 		}
// 		.right {
// 			flex: 4;
// 			display: flex;
// 			padding: 1vh;
// 			.view {
// 				flex: 2;
// 			}
// 			.thumsup {
// 				flex: 2;
// 			}
// 			.writer {
// 				flex: 3;
// 			}
// 			.createdat {
// 				flex: 3;
// 			}
// 	}
// }
// `;

// export const TableList = styled.div`
// `;
