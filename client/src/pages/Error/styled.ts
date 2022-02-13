import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background: #000;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	height: 30vh;
	width: 80vw;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 3px;
	@media screen and (min-width: 768px) {
		width: 50vh;
		height: 32vh;
	}
`;

export const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: red;
	margin-bottom: 3px;
	@media screen and (min-width: 768px) {
	}
`;

export const ContentContainer = styled.div`
	margin: 2rem;
	text-align:center;
`;

export const ErrorImg = styled.div`
	height: 6rem;
	img {
		height: 6rem;
	}
`;

export const TextWrap = styled.div`
	margin-top: 2rem;
	letter-spacing: 0.1rem;
	line-height: 120%;
	font-size: 1.8rem;
	font-weight: 700;
	color: #000;
`;
