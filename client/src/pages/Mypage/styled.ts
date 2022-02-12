import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background: #6BB8F0;
`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	align-items: stretch;
	height: 115vh;
	width: 100vw;
	background: #C4C4C4;
	@media screen and (min-width: 768px) {
		width: 50vh;
		height: 90vh;
		margin: 3vh 0;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
	}
`;

export const TopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #518EDB;
	margin: 3px;
	@media screen and (min-width: 768px) {
	}
`;

export const PageName = styled.div`
	color: #fff;
	font-size: 1.5rem;
	font-weight: 600;
	margin: 0 1rem;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
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
	}
	@media screen and (min-width: 768px) {
		div {
			font-size: 1rem;
			width: 1.2rem;
			height: 1.2rem;
		}
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	background: #C4C4C4;
	height: 90vh;
	@media screen and (min-width: 768px) {
		height: 70vh;
	}
`;

export const MenuWrap = styled.div`
	background: #C4C4C4;
	display: flex;
	align-items: center;
	// justify-content: space-evenly;
	// border-top: solid 2px #000;
	// border-left: solid 2px #000;
	// border-right: solid 2px #fff;
	// border-bottom: solid 2px #fff;
	margin: 0.5rem;
	div {
		font-size: 1.2rem;
		margin: 0 1.2rem;
	}
	@media screen and (min-width: 768px) {
		div {
			font-size: 0.9rem;
			margin: 0 0.9rem;
		}
	}
`;

export const MypageMenu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	// img {
	// 	height: 5rem;
	// 	width: 5rem;
	// 	border: solid 1px black;
	// }
	div {
		font-size: 1.2rem;
		font-weight: 700;
	}
`;

export const ContentWrap = styled.div`
	background: #C4C4C4;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	margin: 0 3px;
	padding: 3px;
	height: 85vh;
	@media screen and (min-width: 768px) {
	}
`;

export const Category = styled.div`
	height: 2rem;
	display: grid;
	grid-template-columns: 5fr 1fr 1fr 2fr 2fr;
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
			font-size: 0.9rem;
		}
	}
`;

export const ContentPreview = styled.div`
	border-top: solid 2px #fff;
	height: 82vh;
	@media screen and (min-width: 768px) {
		height: 50vh;
	}
`;