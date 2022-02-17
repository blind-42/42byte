import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background: #929191;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 35vh;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 3px;
	@media screen and (min-width: 768px) {
		width: 45vh;
	}
`;

export const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #518EDB;
	margin-bottom: 3px;
	@media screen and (min-width: 768px) {
	}
`;

export const ContentContainer = styled.div`
	text-align:center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 1.5rem 0;
`;

export const SeoulImg = styled.div`
	margin: 1.5rem 0;
	height: 6rem;
	img {
		height: 8rem;
	}
`;

export const TextWrap = styled.div`
	div:nth-child(1) {
		margin: 1.5rem 0;
		font-weight: 700;
		font-size: 1.5rem;
	}
	div:nth-child(2) {
		line-height: 150%;
		font-size: 1.1rem;
	}
`;

export const LoginButtonWrap = styled.div`
	margin: 1.5rem;
	button {
		cursor: pointer;
		padding: 1rem 3rem;
		background: #518EDB;
		color: #fff;
		font-size: 1.4rem;
		font-weight: 700;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
	}
	@media screen and (min-width: 768px) {
		button {
			padding: 0.8rem 2.2rem;
			font-size: 1.1rem;
		}
	}
`;