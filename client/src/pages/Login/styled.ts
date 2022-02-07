import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: green;
`;

export const LoginContainer = styled.div`
	margin: 2rem;
	border: solid 2px black;
	width: 80vw;
	height: 40vh;
	background-color: #ffffff;
	text-align: center;
	@media screen and (min-width: 768px) {
		width: 20vw;
	}
`;

export const TopWrap = styled.div`
	background-color: gray;
	.xIcon {
		text-align: right;
		margin-right: 0.5rem;
		font-size: 3vh;
	}
`;

export const SeoulImg = styled.div`
	margin: 4vh;
	height: 8vh;
	img {
		height: 11vh;
	}
`;

export const TextWrap = styled.div`
	.BiggerText {
		margin: 2vh;
		font-weight: bolder;
		font-size: 2.5vh;
	}
	.SmallerText {
		line-height: 2.3vh;
		font-size: 1.7vh;
	}
`;

export const ButtonWrap = styled.div`
	margin: 3vh;
	input {
		height: 3rem;
		width: 7rem;
		background: black;
		color: white;
		font-weight: bolder;
	}
`;