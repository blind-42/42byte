import styled from 'styled-components';

export const MenubarContainer = styled.div`
	position: absolute;
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
`;

export const ExitButton = styled.div`
	width: 64vw;
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	input {
		background: none;
		border: none;
		font-size: 3rem;
		margin: 0.3rem;
		color: #929191;
	}
	@media screen and (min-width: 768px) {
		width: 13vw;
		input {
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
		height: 6vh;
		width: 50vw;
		margin: 0.5rem;
		background: #0000AD;
		font-family: Noto Sans KR;
		font-weight: 700;
		font-size: 2.6vh;
		color: #fff;
		border-radius: 5px;
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
	border: solid 1px black;
	border-radius: 3px;
	height: 4vh;
	width: 50vw;
	margin: 0.5rem;
	background: #fff;
	div {
		font-size: 2vh;
		display: flex;
		align-items: center;
		text-overflow: clip;
		padding-left: 0.2rem;
	}
	input {
		margin-top: -1px;
		background: #0000AD;
		color: #fff;
		height: 4vh;
		width: 4vh;
		border-radius: 3px;
	}
	@media screen and (min-width: 768px) {
		height: 3vh;
		width: 11vw;
		span {
			font-size: 1.5vh;
			padding-left: 0.2rem;
		}
		input {
			height: 3vh;
			width: 3vh;
		}
	}
`;

export const MenuListWrap = styled.div`
`;
