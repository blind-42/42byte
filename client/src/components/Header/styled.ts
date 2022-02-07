import styled from 'styled-components';

export const Container = styled.div`
  height: 6vh;
  display: flex;
  justify-content: space-between;
  border: solid 2px black;
  padding: 0.6vh 3vw 0.6vh 0.6vw;
`;

export const MenubarLogoWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const MenubarButton = styled.div`
	display: flex;
	align-items: center;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
  .logoImg {
		padding: 1rem;
		height: 5vh;
	}
`;

export const UserProfile = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const UserImg = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    height: 4.5vh;
  }
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5vh;
  font-size: 2vh;
`;

export const DropdownMenu = styled.div`
	margin: 6vh 3vw 0 0;
	padding: 0.4rem;
	border: solid 1px black;
	position: absolute;
	top: 0;
  right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	li {
		padding: 0.4rem 1rem 0.4rem 1rem;
		list-style: none;
		font-size: 1.8vh;
	}
`;