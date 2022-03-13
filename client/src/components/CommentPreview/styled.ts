import styled from 'styled-components';

export const CommentPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-bottom: solid 1px #929191;
  padding: 0.5rem 1.5rem;
  height: 5.5rem;
  ${({ theme }) => theme.media.desktop`
    height: 4.3rem;
  `}
`;

export const CommentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 500;
  div:nth-child(2) {
    font-size: 1.2rem;
    font-weight: 400;
  }
  ${({ theme }) => theme.media.desktop`
    font-size: 0.9rem;
    div:nth-child(2) {
      font-size: 0.9rem;
    }
  `}
`;

export const OriginalPost = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: 500;
  color: #737272;
  div {
    margin-left: 0.5rem;
    color: #bf2d2d;
    font-weight: 600;
  }
  ${({ theme }) => theme.media.desktop`
    font-size: 0.85rem;
  `}
`;
