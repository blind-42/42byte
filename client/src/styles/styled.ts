import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #6BB8F0;
	height: 100vh;
`;

export const PageContainer = styled.div`
	height: 95vh;
	width: 100vw;
	background: #C4C4C4;
	padding: 3px;
	${({theme}) => theme.media.tablet`
		width: 90vw;
		height: 80vh;
		margin: auto 0;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 3rem auto 7rem;
		width: 90vh;
		height: 90vh;
		margin: 2.5vh 0;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
	`}
`;

export const TopBar = styled.div<{err?: boolean;}>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3px;
	background: ${(props) => props.err ? '#BF2D2D' : '#518EDB'};
`;

export const PageName = styled.div`
	color: #fff;
	letter-spacing: 0.1rem;
	font-size: 1.3rem;
	font-weight: 600;
	margin: 0 1rem;
	display: flex;
	div {
		color: #fff
	}
	${({theme}) => theme.media.tablet`
		font-size: 1rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 1rem;
	`}
`;

export const Squares = styled.div`
	display: flex;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #C4C4C4;
		font-size: 1.5rem;
		font-weight: 900;
		width: 2rem;
		height: 2rem;
		text-align: center;
		margin: 3px;
		margin-left: 0;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		padding-bottom: 3px;
	}
	${({theme}) => theme.media.tablet`
		div {
			font-size: 1rem;
			width: 1.2rem;
			height: 1.2rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			font-size: 1rem;
			width: 1.2rem;
			height: 1.2rem;
		}
	`}
`;

export const Category = styled.div`
	display: grid;
	grid-template-columns: 1.2fr 6fr 1fr 1fr 2fr;
	border-bottom: solid 2px #929191;
	font-size: 1.2rem;
	font-weight: 600;
	height: 2.5rem;
	div {
		place-self: center center;
	}
	${({theme}) => theme.media.tablet`
		font-size: 0.9rem;
		height: 2.2rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.9rem;
		height: 2.2rem;
	`}
`;

export const ContentFooterWrap = styled.div`
	display: grid;
	align-items: stretch;
	grid-template-rows: 80vh 10vh;
	${({theme}) => theme.media.tablet`
	grid-template-rows: 67vh 8vh;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 77vh 8vh;
	`}
`;

// Error, Loading Page
export const AlertContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	background: #000;
`;

export const  AlertPageWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 23rem;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 3px;
`;

export const AlertPageName = styled.div`
	color: #fff;
	letter-spacing: 0.1rem; 
	font-size: 1.2rem;
	font-weight: 700;
	margin: 0 1rem;
	display: flex;
	font-family: 'Press Start 2P', cursive;
	div {
		color: #fff
	}
	${({theme}) => theme.media.tablet`
		font-size: 0.9rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.9rem;
	`}
`;

export const AlertContentWrap = styled.div`
	margin: 1.5rem;
	text-align:center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const AlertTextWrap = styled.div`
	margin-top: 1.2rem;
	line-height: 150%;
	font-size: 0.8;
	font-weight: 700;
	color: #000;
	font-family: 'Press Start 2P', cursive;
	@media screen and (min-width: 768px) {
		font-size: 1.1rem;
	}
`;