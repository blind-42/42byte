import styled from 'styled-components';

export const PageContainer = styled.div``;

export const LogoImg = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    opacity: 0.4;
    height: 5rem;
  }
  ${({ theme }) => theme.media.tablet`
		img {
			height: 6rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		img {
			height: 6rem;
		}
	`}
`;

export const BoardIconWrap = styled.div`
  position: absolute;
  z-index: 1;
  top: 2rem;
  left: 2rem;
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: column;
  row-gap: 1rem;
  column-gap: 1rem;
  place-items: center center;
  plage-content: start start;
  ${({ theme }) => theme.media.tablet`
		top: 1.5rem;
		left: 1rem;
		grid-template-rows: repeat(6, auto);
	`}
  ${({ theme }) => theme.media.desktop`
		top: 1.5rem;
		left: 1rem;
		grid-template-rows: repeat(6, auto);
	`}
`;

export const BoardIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  a {
    display: flex;
    flex-direction: column;
  }
  img {
    object-fit: contain;
    height: 5.5rem;
  }
  div {
    overflow-y: hidden;
    text-align: center;
    font-weight: 600;
    font-size: 1.3rem;
    color: #fff;
    margin: 0.3rem 0;
    padding: 0 3px;
  }
  ${({ theme }) => theme.media.tablet`
		width: 7rem;
		img {
			height: 4rem;
		}
		div {
			font-size: 1rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		width: 7rem;
		img {
			height: 4rem;
		}
		div {
			font-size: 1rem;
		}
	`}
`;

export const AdminPageButton = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 0;
  bottom: 5rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 7rem;
  }
  div {
    font-weight: 600;
    font-size: 1.3rem;
    color: #fff;
    margin: 0.3rem 0;
    padding: 0 3px;
  }
  ${({ theme }) => theme.media.tablet`
		bottom: 4.5rem;
		img {
			height: 5rem;
		}
		div {
			font-size: 1rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		bottom: 4.5rem;
		img {
			height: 5rem;
		}
		div {
			font-size: 1rem;
		}
	`}
`;
