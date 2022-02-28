import styled from 'styled-components';


export const CommentWrap = styled.div`
	padding: 1rem 0.5rem 0.5rem;
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

export const Info = styled.div<{isUsers: boolean;}>`
	display: flex;
	h3 {
		margin-right: 1rem;
		font-size: 1.2rem;
		font-weight: 600;
		color: ${(props) => props.isUsers ? '#518EDB' : '#000'};
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

export const CommentBottom = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.5rem;
	@media screen and (min-width: 768px) {
		margin-top: 0.3rem;
	}
`;

export const ReCommentBox = styled.div<{openReCmt: boolean}>`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border: solid 1.5px #929191;
	width: 3.2rem;
	height: 2.1rem;
	text-align: center;
	line-height: 0.9rem;
	font-size: 0.9rem;
	color: ${(props) => props.openReCmt && '#fff'};
	background: ${(props) => props.openReCmt && '#929191'};
	@media screen and (min-width: 768px) {
		width: 2.4rem;
		height: 1.6rem;
		font-size: 0.7rem;
	}
`;

export const LikesBox = styled.div<{boxState: boolean;}>`
	cursor: pointer;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	/* margin-left: auto; */
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
	margin-left: 2rem;
`;

///////Recomment.tsx

export const RecommentContainer = styled.div`
	display: flex;
	margin-left: 0.5rem;
	span {
		flex: 0.5;
		text-align: center;
		font-size: 1.2rem;
	}
	@media screen and (min-width: 768px) {
		span {
		font-size: 0.9rem;
	}
	}
`;

export const ReCommentWrap = styled.div`
	flex: 9.5;
	margin-left: 0.5rem;
	padding: 1rem 1rem 0.5rem;
	background: #C4C4C4;
	@media screen and (min-width: 768px) {
		margin-left: 0;
		padding: 0.5rem 1rem;
	}
`;