import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 8vh;
	width: 100vw;
  display: flex;
  justify-content: space-between;
	padding: 0 2rem;
	@media screen and (min-width: 768px){
		height: 7vh;
		padding: 0 2.5rem;
	}
`;

export const MenubarLogoWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const MenubarButton = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.hamburger {
		width: 2.5rem;
		height: 0.2rem;
		background: #929191;
		margin: 0.25rem 0;
	}
	@media screen and (min-width: 768px) {
		.hamburger {
			width: 2rem;
			height: 0.13rem;
			background: #929191;
			margin: 0.2rem 0;
		}
	}
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 1rem;
  .logoImg {
	}
	@media screen and (min-width: 768px) {
		margin: 0 2rem;
	}
`;

export const UserProfileWrap = styled.div`
	display: flex;
	justify-content: flex-end;
	alidn-items: center;
`;

export const UserImg = styled.div`
  display: flex;
  align-items: center;
	margin: 0 1rem;
  img {
    border-radius: 50%;
    height: 4.5vh;
  }
	@media screen and (min-width: 768px) {
		margin: 0 1rem;
	}
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
`;

export const DropdownMenu = styled.div`
	position: absolute;
	top: 8vh;
  right: 0;
	width: 17vh;
	height: 10vh;
	background: #E5E5E5;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	li {
		list-style: none;
		font-size: 1.4rem;
	}
	@media screen and (min-width: 768px) {
		top: 7vh;
		right: 1.2rem;
		width: 15vh;
		height: 9vh;
		li {
			font-size: 0.8rem;
		}
	}
`;