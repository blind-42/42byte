import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	// width: 100vw;
	height: 100vh;
`;

export const MypageContainer = styled.div`
	height: 92vh;
	width: 100vw;
	@media screen and (min-width: 768px) {
		margin: 5vh 0;
		height: 35rem;
		width: 55rem;
	}
`;

export const TopBar = styled.div`
	border-bottom: solid 2px #C4C4C4;
	background: #E5E5E5;
	height: 4vh;
	display: flex;
	align-items: center;
	justify-content: center;
	.header {
		font-size: 1.2rem;
	}
	@media screen and (min-width: 768px) {
		border: solid 1px black;
		border-bottom: none;
		justify-content: space-between;
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
		.header {
			font-size: 1.1rem;
		}
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 0.5rem;
	background: #C4C4C4;
	height: 88vh;
	@media screen and (min-width: 768px) {
		height: 33rem;
		border: solid 1px black;
	}
`;

export const MenuWrap = styled.div`
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	.mypageMenu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		margin: 1rem;
		img {
			height: 5rem;
			width: 5rem;
			border: solid 1px black;
		}
		div {
			font-size: 1.2rem;
			margin-top: 1rem;
		}
	}
	@media screen and (min-width: 768px) {
		padding: 0 10rem;
		border: solid 1px black;
		.mypageMenu {
			margin: 0.5rem;
			img {
				height: 4rem;
				width: 4rem;
			}
			div {
				font-size: 0.8rem;
				margin-top: 0.5rem;
			}
		}
	}
`;

export const ContentWrap = styled.div`
	background: #fff;
	margin-top: 0.5rem;
	height: 73vh;
	.category {
		background: #E5E5E5;
		height: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		.title {
			width: 10rem;
			text-align: center;
		}
	}
	@media screen and (min-width: 768px) {
		border: solid 1px black;
		.category {
			border: none;
			border-bottom: solid 1px black;
			height: 1.5rem;
			font-size: 0.8rem;
			.title{
				width: 20rem;
			}
		}
	}
`;

export const ContentPreview = styled.div`
`;