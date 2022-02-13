import styled from 'styled-components';

export const PostContainer = styled.div`
	background: #C4C4C4;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	padding: 3px;
	height: 85vh;
	@media screen and (min-width: 768px) {
	}
`;

export const Category = styled.div`
	height: 2rem;
	display: grid;
	grid-template-columns: 6fr 1fr 1fr 2fr;
	justify-items: space-between;
	border-bottom: solid 2px #929191;
	div {
		place-self: center center;
		font-size: 1.2rem;
		font-weight: 600;
	}
	@media screen and (min-width: 768px) {
		height: 1.5rem;
		div {
			font-size: 0.8rem;
		}
	}
`;

export const PostWrap = styled.div`
	border-top: solid 1px #fff;
	display: grid;
	grid-template-rows: repeat(20, 1fr);
	align-content: space-between;
	align-items: center;
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
