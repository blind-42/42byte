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

export const MainIconWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 95%;
  position: absolute;
  z-index: 1;
  top: 3px;
  left: 3px;
`;

export const MainIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  margin: 0.5rem 0rem;
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
    font-size: 1.2rem;
    text-shadow: 2px 2px 2px #000;
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
			font-size: 0.9rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		width: 6rem;
		img {
			height: 4rem;
		}
		div {
			font-size: 0.9rem;
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
    text-shadow: 2px 2px 2px #000;
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
