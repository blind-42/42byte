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
	${({theme}) => theme.media.tablet`
		height: 4.5vh;
		padding: 3px;
	`}
	${({theme}) => theme.media.desktop`
		height: 4.5vh;
		padding: 3px;
	`}
`;

export const MenubarLogoWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const MenubarButton = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	width: 6rem;
	div {
		font-size: 1.2rem;
	}
	${({theme}) => theme.media.tablet`
		width: 5.5rem;
		div {
			font-size: 1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		width: 5rem;
		div {
			font-size: 1rem;
		}
	`}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 3px;
	padding: 0 1rem;
	border-right: solid 2px #929191;
	border-left: solid 2px #929191;
`;
