import styled from 'styled-components';

export const MenubarContainer = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 0;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #c4c4c4;
  width: 25rem;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-bottom: solid 2px #000;
  ${({ theme }) => theme.media.tablet`
		width: 18em;
		bottom: 2.5rem;
  `}
  ${({ theme }) => theme.media.desktop`
		width: 17rem;
		bottom: 2.5rem;
	`}
`;

export const Topbar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background: #518edb;
  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c4c4c4;
    font-size: 1.2rem;
    font-weight: 900;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    margin: 3px;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff;
    border-right: solid 2px #000;
    border-bottom: solid 2px #000;
    padding-bottom: 3px;
  }
  ${({ theme }) => theme.media.tablet`
		div {
			font-size: 1rem;
			width: 1.3rem;
			height: 1.3rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		div {
			font-size: 1rem;
			width: 1.3rem;
			height: 1.3rem;
		}
	`}
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 9rem 3.5rem;
  ${({ theme }) => theme.media.tablet`
		grid-template-rows: 1fr 6rem 2.5rem;
	`}
  ${({ theme }) => theme.media.desktop`
		grid-template-rows: 1fr 6rem 2.5rem;
	`}
`;

export const BoardListWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 3px 0;
  border-bottom: solid 2px #929191;
`;

export const WelcomePhrase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d5d5d5;
  color: #000;
  height: 2.5rem;
  font-family: 'Press Start 2P', cursive;
  font-size: 1.3rem;
  font-weight: 500;
  ${({ theme }) => theme.media.tablet`
		height: 1.8rem;
		font-size: 0.9rem;
	`}
  ${({ theme }) => theme.media.desktop`
		height: 1.7rem;
		font-size: 0.8rem;
	`}
`;

export const BoardNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 23rem;
  padding: 0.5rem 0;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 19rem;
    font-size: 1.5rem;
    font-weight: 450;
    img {
      height: 1.6rem;
      margin-right: 0.5rem;
    }
  }
  ${({ theme }) => theme.media.tablet`
		height: 16rem;
		div {
			width: 14rem;
			font-size: 1rem;
			img {
				height: 1.2rem;
			}
		}
	`}
  ${({ theme }) => theme.media.desktop`
		height: 16rem;
		div {
			width: 13rem;
			font-size: 0.9rem;
			img {
				height: 1.1rem;
			}
		}
	`}
`;

export const UserProfileWrap = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  border-top: solid 2px #fff;
`;

export const UserImg = styled.div<{ state?: boolean }>`
  place-self: end center;
  margin: 0 0 2px 12px;
  img {
    border-top: solid 2px #000;
    border-left: solid 2px #000;
    border-right: solid 2px #fff;
    border-bottom: solid 2px #fff;
    object-fit: contain;
    height: 7.8rem;
    width: 7.8rem;
  }
  ${({ theme }) => theme.media.tablet`
		margin: 0 0 2px 8px;
		img {
			height: 5rem;
			width: 5rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		margin: 0 0 2px 8px;
		img {
			height: 5rem;
			width: 5rem;
		}
	`}
`;

export const UserMenuWritingButtonWrap = styled.div`
  display: grid;
  grid-template-rows: 1fr 2.5rem;
  margin: 3px 6px;
  ${({ theme }) => theme.media.tablet`
		grid-template-rows: 1fr 1.8rem;
	`}
  ${({ theme }) => theme.media.desktop`
		grid-template-rows: 1fr 1.7rem;
	`}
`;

export const UserMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0.2rem 0 0.2rem 1.5rem;
  span {
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
  }
  ${({ theme }) => theme.media.tablet`
	margin: 0.1rem 0 0.1rem 0.7rem;
	span {
		font-size: 1rem;
	}
`}
  ${({ theme }) => theme.media.desktop`
	margin: 0.1rem 0 0.1rem 0.6rem;
	span {
		font-size: 0.9rem;
	}
`}
`;

export const WritingButton = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  input {
    cursor: pointer;
    height: 2.5rem;
    width: 13rem;
    background: #518edb;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff;
    border-right: solid 2px #000;
    border-bottom: solid 2px #000;
    font-weight: 700;
    font-size: 1.3rem;
    color: #fff;
  }
  ${({ theme }) => theme.media.tablet`
		input {
			height: 1.8rem;
			width: 10rem;
			font-size: 1rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		input {
			height: 1.7rem;
			width: 9rem;
			font-size: 0.9rem;
		}
	`}
`;

export const UtilWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  padding: 3px;
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  border-top: solid 2px #000;
  border-left: solid 2px #000;
  border-right: solid 2px #fff;
  border-bottom: solid 2px #fff;
  height: 2.5rem;
  margin: 3px;
  background: #fff;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      font-size: 1.2rem;
      line-height: 1.2rem;
      width: 20rem;
      display: flex;
      margin: 2px;
      padding-left: 0.3rem;
      border: none;
      background: none;
    }
    button {
      cursor: pointer;
      margin-right: -2px;
      background: #518edb;
      border-top: solid 2px #fff;
      border-left: solid 2px #fff;
      border-right: solid 2px #000;
      border-bottom: solid 2px #000;
      color: #fff;
      height: 2.5rem;
      width: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        font-size: 1.3rem;
      }
    }
  }
  ${({ theme }) => theme.media.tablet`
		height: 1.8rem;
		form {
			input {
				font-size: 1rem;
				width: 13rem;
			}
			button {
				height: 1.8rem;
				width: 1.8rem;
				div {
					font-size: 1.1rem; 
				}
			}
		}
	`}
  ${({ theme }) => theme.media.desktop`
		height: 1.7rem;
		form {
			input {
				font-size: 0.8rem;
				width: 13rem;
			}
			button {
				height: 1.7rem;
				width: 1.7rem;
				div {
					font-size: 0.9rem; 
				}
			}
		}
	`}
`;
