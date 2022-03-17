import styled from 'styled-components';

export const HeaderContainer = styled.div`
  z-index: 2;
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 3px;
  background: #c4c4c4;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
  ${({ theme }) => theme.media.tablet`
		height: 2.5rem;
		padding: 3px;
	`}
  ${({ theme }) => theme.media.desktop`
		height: 2.5rem;
		padding: 3px;
	`}
`;

export const MenubarLogoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const MenubarButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-bottom: solid 2px #000;
  padding: 0 1rem;
  font-size: 1.1rem;
  font-family: 'Press Start 2P', cursive;
  :hover {
    background: #d5d5d5;
  }
  ${({ theme }) => theme.media.tablet`
		padding: 0 0.8rem;
		font-size: 0.8rem;
	`}
  ${({ theme }) => theme.media.desktop`
		padding: 0 0.8rem;
		font-size: 0.8rem;
	`}
`;

export const HeaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--modal-index);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const UtilButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3px;
  padding: 3px;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-bottom: solid 2px #000;
  padding: 0 0.6rem;
  img {
    height: 2rem;
  }
  div {
    position: fixed;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #bf2d2d;
    color: #fff;
    margin-left: 1.4rem;
    margin-bottom: 1rem;
    padding-bottom: 0.1rem;
    font-size: 1.1rem;
    font-weight: 500;
    width: 1.5rem;
    height: 1.5rem;
  }
  :hover {
    background: #d5d5d5;
  }
  ${({ theme }) => theme.media.tablet`
		img {
			height: 1.3rem;
		}
		div {
			margin-left: 1.3rem;
			margin-bottom: 0.5rem;
			font-size: 0.7rem;
			font-weight: 500;
			width: 0.9rem;
			height: 0.9rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		padding: 0 0.6rem;
		img {
			height: 1.4rem;
		}
		div {
			margin-left: 1.3rem;
			margin-bottom: 0.5rem;
			font-size: 0.7rem;
			font-weight: 500;
			width: 1rem;
			height: 1rem;
		}
	`}
`;

export const TimeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 2px #000;
  border-left: solid 2px #000;
  border-right: solid 2px #fff;
  border-bottom: solid 2px #fff;
  padding: 0 1rem;
  font-size: 1.1rem;
  font-family: 'Press Start 2P', cursive;
  ${({ theme }) => theme.media.tablet`
		padding: 0 0.8rem;
		font-size: 0.8rem;
	`}
  ${({ theme }) => theme.media.desktop`
		padding: 0 0.8rem;
		font-size: 0.8rem;
	`}
`;
