import styled from 'styled-components';

export const FooterWrap = styled.div`
  align-self: end;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #c4c4c4;
  ${({ theme }) => theme.media.tablet`
		height: 5rem;
	`}
  ${({ theme }) => theme.media.desktop`
		height: 5rem;
	`}
`;

export const GitLink = styled.div`
  display: flex;
  justify-content: space-evenly;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0.3rem;
    font-size: 2.5rem;
    height: 2.5rem;
    width: 2.5rem;
    img {
      width: 2.3rem;
    }
  }
  ${({ theme }) => theme.media.tablet`
		div {
			margin: 0 0.3rem;
			font-size: 1.3rem;
			height: 1.3rem;
			width: 1.3rem;
			img {
				width: 1.3rem;
			}
		}
	`}
  ${({ theme }) => theme.media.desktop`
		div {
			margin: 0 0.3rem;
			font-size: 1.3rem;
			height: 1.3rem;
			width: 1.3rem;
			img {
				width: 1.3rem;
			}
		}
	`}
`;

export const Names = styled.div`
  font-size: 0.9rem;
  ${({ theme }) => theme.media.tablet`
		font-size: 0.7rem;
	`}
  ${({ theme }) => theme.media.desktop`
		font-size: 0.7rem;
	`}
`;

export const Copyright = styled.div`
  font-size: 0.9rem;
  ${({ theme }) => theme.media.tablet`
		font-size: 0.7rem;
	`}
  ${({ theme }) => theme.media.desktop`
		font-size: 0.7rem;
	`}
`;
