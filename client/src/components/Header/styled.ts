import styled from 'styled-components';

export const HeaderContainer = styled.div`
	position: fixed;
	bottom: 0;
  height: 5vh;
	width: 100vw;
  display: flex;
  justify-content: space-between;
	padding: 3px;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	@media screen and (min-width: 768px){
		height: 4.5vh;
		padding: 3px;
	}
`;

export const MenubarLogoWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const MenubarButton = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 0.8rem;
	div {
		font-size: 1.2rem;
	}
	@media screen and (min-width: 768px) {
		padding: 0 0.8rem;
		div {
			font-size: 1rem;
		}
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 3px;
	padding: 0 1rem;
	border-right: solid 2px #929191;
	border-left: solid 2px #929191;
	@media screen and (min-width: 768px) {
	}
`;
