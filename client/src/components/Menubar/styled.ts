import styled from 'styled-components';

export const MenubarContainer = styled.div`
	z-index: 1;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #E5E5E5;
	height: 100vh;
	width: 70vw;
	@media screen and (min-width: 768px) {
		height: 100vh;
		width: 14vw;
  }
	box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 10px 10px rgba(0, 0, 0, 0.24);
`;

export const ExitButton = styled.div`
	width: 64vw;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	div {
		background: none;
		border: none;
		font-size: 3rem;
		margin: 0.3rem;
		color: #929191;
	}
	@media screen and (min-width: 768px) {
		width: 13vw;
		div {
			font-size: 1.6rem;
			margin: 0.3rem;
		}
	}
`;

export const UtilWrap = styled.div`
	margin: 3rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const WritingButton = styled.div`
	input {
		cursor: pointer;
		height: 6vh;
		width: 50vw;
		margin: 0.5rem;
		background: #0000AD;
		font-family: Noto Sans KR;
		font-weight: 700;
		font-size: 2.6vh;
		color: #fff;
	}
	@media screen and (min-width: 768px) {
		input {
			height: 4.5vh;
			width: 11vw;
			margin: 1rem;
			font-size: 2vh;
		}
	}
`;

export const Search = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: solid 1px black;
	height: 4vh;
	width: 50vw;
	margin: 0.5rem;
	background: #fff;
	.textInput {
		font-size: 2vh;
		display: flex;
		padding-left: 0.2rem;
		border: none;
		height: 2.5vh;
		width: 40vw;
	}
	.searchButton {
		margin-top: -1px;
		background: #0000AD;
		color: #fff;
		height: 4vh;
		width: 4vh;
		color: white;
		div {
			font-size: 2.5vh;
			transform: rotate(100deg);
		}
	}
	@media screen and (min-width: 768px) {
		height: 3vh;
		width: 11vw;
		.textInput {
			font-size: 1.5vh;
			padding-left: 0.2rem;
			width: 8vw;
		}
		.searchButton {
			height: 3vh;
			width: 3vh;
			div {
				font-size: 2vh; 
			}
		}
	}
`;

export const MenuListWrap = styled.div`
`;
