import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	// background: #6BB8F0; 
	background-image: url('images/background_cloud.png');
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 26rem;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 3px;
	${({theme}) => theme.media.tablet`
		width: 23rem;
	`}
	${({theme}) => theme.media.desktop`
		width: 23rem;
	`}
`;

export const ContentContainer = styled.div`
	text-align:center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 29rem;
	padding: 0.8rem 0;
	${({theme}) => theme.media.tablet`
		height: 25rem;
		padding: 0.5rem 0;
	`}
	${({theme}) => theme.media.desktop`
		height: 25rem;
		padding: 0.5rem 0;
	`}
`;

export const SeoulImg = styled.div`
	img {
		height: 10rem;
	}
	${({theme}) => theme.media.tablet`
		img {
			height: 9rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		img {
			height: 9rem;
		}
	`}
`;

export const TextWrap = styled.div`
	div:nth-child(1) {
		margin-bottom: 1rem;
		font-weight: 700;
		font-size: 1.7rem;
	}
	div:nth-child(2) {
		line-height: 150%;
		font-size: 1.2rem;
	}
	${({theme}) => theme.media.tablet`
		div:nth-child(1) {
			font-size: 1.5rem;
		}
		div:nth-child(2) {
			font-size: 1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div:nth-child(1) {
			font-size: 1.5rem;
		}
		div:nth-child(2) {
			font-size: 1rem;
		}
	`}
`;

export const LoginButtonWrap = styled.div`
	// margin: 1.5rem 0;
	button {
		cursor: pointer;
		background: #518EDB;
		color: #fff;
		width: 7rem;
		height: 3.5rem;
		font-size: 1.3rem;
		font-weight: 600;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
	}
	${({theme}) => theme.media.tablet`
		button {
			font-size: 1.1rem;
			width: 5.8rem;
			height: 2.8rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		button {
			font-size: 1.1rem;
			width: 5.8rem;
			height: 2.8rem;
		}
	`}
`;