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
	height: 95vh;
	width: 100vw;
	background: #C4C4C4;
	padding: 3px;
	@media screen and (min-width: 768px) {
		width: 90vh;
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
	margin-bottom: 3px;
	@media screen and (min-width: 768px) {
	}
`;

export const PageName = styled.div`
	color: #fff;
	letter-spacing: 0.1rem;
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