import styled from 'styled-components';


export const CommentWrap = styled.div`
	padding: 1rem 0.5rem;
	@media screen and (min-width: 768px) {
		padding: 0.5rem;
	}
`;

export const ModifyCommentWrap = styled.div`
	margin: 0.5rem;
	border: solid 2px #518EDB;
	padding: 1rem;
	background: #C4C4C4;
`;

export const CommentTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
`;

export const Info = styled.div`
	display: flex;
	h3 {
		margin-right: 1rem;
		font-size: 1.2rem;
		font-weight: 600;
		color: #000;
	}
	div {
		font-size: 1.1rem;
	}
	@media screen and (min-width: 768px) {
		h3 {
			font-size: 0.9rem;
		}
		div {
			font-size: 0.8rem;
		}
	}
`;

export const Modify = styled.div`
	cursor: pointer;
	display: flex;
	div {
		margin-left: 1rem;
		font-size: 1.1rem;
	}
	@media screen and (min-width: 768px) {
		div {
			font-size: 0.8rem;
		}
	}
`;

export const Content = styled.div`
	word-wrap: break-word;
	word-break: break-all;
	font-size: 1.2rem;
	color: #000;
	.isDel {
		color: #929191;
	}
	@media screen and (min-width: 768px) {
		font-size: 0.8rem;
}
`;

export const LikesBox = styled.div<{boxState?: boolean;}>`
	cursor: pointer;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin-left: auto;
	border: solid 1.5px #518EDB;
	width: 3.2rem;
	height: 2.1rem;
	font-size: 0.4rem;
	font-weight: 600;
	color: ${(props) => props.boxState ? '#fff' : '#518EDB'};
	background: ${(props) => props.boxState && '#518EDB'};
	svg path {
    stroke: ${(props) => props.boxState ? '#fff' : '#518EDB'};
	}
	div:nth-child(1) {
		margin-top: 0.1rem;
		font-size: 0.9rem;
	}
	@media screen and (min-width: 768px) {
		width: 2.7rem;
		height: 1.6rem;
		font-size: 0.8rem;
		div:nth-child(1) {
			font-size: 0.7rem;
		}
	}
`;

export const GLine = styled.div`
	border-bottom: solid 1px #929191;
`;

export const FLine = styled.div`
	border-top: solid 1px #fff;
`;

export const ReCommentListWrap = styled.div`
	margin-left: 1rem;
`;

///////Recomment.tsx
export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
`;

export const RecommentContainer = styled.div`
	display: flex;
	margin-left: 1rem;
`;

export const ReCommentWrap = styled.div`
	padding: 1rem 0.5rem;
	background: #C4C4C4;
	@media screen and (min-width: 768px) {
		padding: 0.5rem;
	}
`;
