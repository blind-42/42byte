import styled from 'styled-components';


export const CommentWrap = styled.div`
	padding: 1rem;
	${({theme}) => theme.media.tablet`
		padding: 0.8rem 1rem;
	`}
	${({theme}) => theme.media.desktop`
		padding: 0.8rem 1rem;
	`}
`;

export const ModifyCommentWrap = styled.div`
	background: #C4C4C4;	
	border: solid 2px #518EDB;
	padding: 1rem;
	margin: 0.5rem;
	${({theme}) => theme.media.tablet`
		padding: 0.5rem 1rem;
	`}
	${({theme}) => theme.media.desktop`
		padding: 0.5rem 1rem;
	`}
`;

export const CommentTop = styled.div`
	display: flex;
	justify-content: space-between;

`;

export const Info = styled.div<{isUsers: boolean;}>`
	display: flex;
	align-items: center;
	h3 {
		margin-right: 0.7rem;
		font-size: 1.2rem;
		font-weight: 600;
		color: ${(props) => props.isUsers ? '#518EDB' : '#676767'};
	}
	div {
		font-size: 1.1rem;
	}
	${({theme}) => theme.media.tablet`
		h3 {
			margin-right: 0.5rem;
			font-size: 0.9rem;
		}
		div {
			font-size: 0.8rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		h3 {
			margin-right: 0.5rem;
			font-size: 0.9rem;
		}
		div {
			font-size: 0.8rem;
		}
	`}
`;

export const Modify = styled.div`
	cursor: pointer;
	display: flex;
	div {
		margin-left: 1rem;
		font-size: 1.1rem;
	}
	${({theme}) => theme.media.tablet`
		div {
			font-size: 0.8rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			font-size: 0.8rem;
		}
	`}
`;

export const Content = styled.div`
	margin: 0.3rem 0;
	word-wrap: break-word;
	word-break: break-all;
	font-size: 1.2rem;
	color: #000;
	.isDel {
		color: #929191;
	}
	div {
		line-height: 150%;
		span {
			margin-right: 0.4rem;
			color: #929191;
		}
	}
	${({theme}) => theme.media.tablet`
		font-size: 0.8rem;
		div {
			span {
				margin-right: 0.3rem;
				font-size: 0.8rem;
			}
		}
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.8rem;
		div {
			span {
				margin-right: 0.3rem;
				font-size: 0.8rem;
			}
		}
	`}
`;

export const CommentBottom = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const ReCommentBox = styled.div<{openReCmt: boolean}>`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 1.5px #929191;
	height: 2.1rem;
	width: 4rem;
	margin: 0 0.2rem;
	font-size: 1rem;
	font-weight: 500;
	color: ${(props) => props.openReCmt && '#fff'};
	background: ${(props) => props.openReCmt && '#929191'};
	${({theme}) => theme.media.tablet`
		height: 1.5rem;
		width: 3rem;
		font-size: 0.7rem;
	`}
	${({theme}) => theme.media.desktop`
		height: 1.5rem;
		width: 3rem;
		font-size: 0.7rem;
	`}
`;

export const LikesBox = styled.div<{boxState: boolean;}>`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 1.5px #518EDB;
	height: 2.1rem;
	width: 4rem;
	margin: 0 0.2rem;
	font-size: 1rem;
	font-weight: 500;
	color: ${(props) => props.boxState ? '#fff' : '#518EDB'};
	background: ${(props) => props.boxState && '#518EDB'};
	svg path {
    stroke: ${(props) => props.boxState ? '#fff' : '#518EDB'};
	}
	div:nth-child(1) {
		margin: 0.1rem 0.4rem 0 0;
	}
	${({theme}) => theme.media.tablet`
		height: 1.5rem;
		width: 3rem;
		font-size: 0.7rem;
		div:nth-child(1) {
			margin: 0.1rem 0.3rem 0 0;
		}
	`}
	${({theme}) => theme.media.desktop`
		height: 1.5rem;
		width: 3rem;
		font-size: 0.7rem;
		div:nth-child(1) {
			margin: 0.1rem 0.3rem 0 0;
		}
	`}
`;

export const GLine = styled.div`
	border-bottom: solid 1px #929191;
`;

export const FLine = styled.div`
	border-top: solid 1px #fff;
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
	${({theme}) => theme.media.tablet`
		span {
			font-size: 0.9rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		span {
			font-size: 0.9rem;
		}
	`}
`;

export const ReCommentWrap = styled.div`
	flex: 9.5;
	margin-left: 0.5rem;
	padding: 1rem;
	background: #DBDBDB;
	${({theme}) => theme.media.tablet`
		margin-left: 0;
		padding: 0.5rem 1rem;
	`}
	${({theme}) => theme.media.desktop`
		margin-left: 0;
		padding: 0.5rem 1rem;
	`}
`;