import styled from 'styled-components';

export const PostContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: solid 2px #000;
  border-left: solid 2px #000;
  border-right: solid 2px #fff;
  border-bottom: solid 2px #fff;
  padding: 0.3rem;
  margin: 3px 0;
  background: #d5d5d5;
`;

export const DetailContainer = styled.div`
  margin: 0.5rem;
  word-spacing: 0.02rem;
  margin-bottom: 4rem;
`;

export const Title = styled.div<{ state?: boolean }>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.state ? '0.7rem' : '0')};
  div:last-child {
    font-size: 1.6rem;
    font-weight: 600;
    color: #000;
    padding: 0 0 0.2rem 0.7rem;
  }
  ${({ theme }) => theme.media.tablet`
		div:last-child {
			font-size: 1.2rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		div:last-child {
			font-size: 1.2rem;
		}
	`}
`;

export const Specific = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.7rem;
  border-bottom: solid 2px #929191;
  font-size: 1.1rem;
  ${({ theme }) => theme.media.tablet`
		font-size: 0.8rem;
		padding: 0.4rem 0.7rem;
	`}
  ${({ theme }) => theme.media.desktop`
		font-size: 0.8rem;
		padding: 0.4rem 0.7rem;
	`}
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 1rem;
  }
  ${({ theme }) => theme.media.tablet`
		div {
			margin-right: 0.8rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		div {
			margin-right: 0.8rem;
		}
	`}
`;

export const ContentWrap = styled.div`
  border-top: solid 1px #fff;
  padding: 1.5rem;
  .toastui-editor-contents {
    font-size: 1.4rem;
  }
  ${({ theme }) => theme.media.tablet`
		.toastui-editor-contents {
			font-size: 1rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		.toastui-editor-contents {
			font-size: 1rem;
		}
	`}
`;

export const LikeWrap = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: solid 2px #929191;
`;

export const LikesBox = styled.div<{ boxState?: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border: solid 2px #518edb;
  width: 6rem;
  height: 3.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => (props.boxState ? '#fff' : '#518EDB')};
  background: ${(props) => props.boxState && '#518EDB'};
  svg path {
    stroke: ${(props) => (props.boxState ? '#fff' : '#518EDB')};
  }
  div:nth-child(1) {
    margin: 0.1rem 0.6rem 0 0;
    font-size: 1.6rem;
  }
  ${({ theme }) => theme.media.tablet`
		width: 4.8rem;
		height: 2.5rem;
		font-size: 1rem;
		div:nth-child(1) {
			margin: 0.1rem 0.5rem 0 0;
			font-size: 1.1rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		width: 4.8rem;
		height: 2.5rem;
		font-size: 1rem;
		div:nth-child(1) {
			margin: 0.1rem 0.5rem 0 0;
			font-size: 1.1rem;
		}
	`}
`;

export const CommentContainer = styled.div`
  border-top: solid 1px #fff;
  padding: 0.3rem;
`;

export const CommentCount = styled.div`
  margin: 10px 5px;
  font-size: 1.2rem;
  font-weight: 500;
  color: black;
  ${({ theme }) => theme.media.tablet`
		font-size: 0.9rem;
	`}
  ${({ theme }) => theme.media.desktop`
		font-size: 0.9rem;
	`}
`;

export const FLine = styled.div`
  border-top: solid 1px #929191;
`;

export const CommentListWrap = styled.div`
  border-top: solid 1px #fff;
`;
