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
	border: solid 2px black;
	width: 22rem;
	background-color: #ffffff;
	text-align: center;
`;

export const TopWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 1.5rem;
	border-bottom: solid 1px black;
	background: #E5E5E5;
	.decoration {
		display: flex;
		justify-content: center;
		margin: 0 0.5rem;
		div {
			width: 0.7rem;
			height: 0.7rem;
			border-radius: 50%;
			background: #E5E5E5;
			margin: 0.15rem;
		}
		.visibleDot {
			background: #C4C4C4;
		}
	}
`;

export const SeoulImg = styled.div`
	margin: 3rem;
	height: 6rem;
	img {
		height: 8rem;
	}
`;

export const TextWrap = styled.div`
	.BiggerText {
		margin: 1.5rem;
		font-weight: bolder;
		font-size: 1.5rem;
	}
	.SmallerText {
		line-height: 150%;
		font-size: 1.1rem;
	}
`;

export const ButtonWrap = styled.div`
	margin: 2rem;
	button {
		height: 3rem;
		width: 7rem;
		background: black;
		color: white;
		font-weight: bolder;
	}
`;