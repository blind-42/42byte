import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #929191;
`;

export const ErrorContainer = styled.div`
	border: solid 2px black;
	width: 27rem;
	background-color: black;
	text-align: center;
`;

export const ErrorImg = styled.div`
	margin: 2rem;
	height: 6rem;
	img {
		height: 6rem;
	}
`;

export const TextWrap = styled.div`
	letter-spacing: 0.1rem;
	.BiggerText {
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: 900;
		color: red;
	}
	.SmallerText {
		margin-bottom: 2rem;
		line-height: 120%;
		font-size: 1.2rem;
		font-weight: 700;
		color: #ffff;
	}
`;