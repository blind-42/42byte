import styled from 'styled-components';

export const PageContainer = styled.div``;

export const LogoImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
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
    background: #001fe7;
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
