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
	background: #D5D5D5;
`;

export const DetailContainer = styled.div`
	margin: 0.5rem;
	word-spacing: 0.02rem;
	line-height: 150%;
`;

export const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	color: #000;
	padding: 0 0.3rem;
	${({theme}) => theme.media.tablet`
		font-size: 1.2rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 1.2rem;
	`}
`;

export const Specific = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.3rem;
	border-bottom: solid 2px #929191;
	font-size: 1.1rem;
	${({theme}) => theme.media.tablet`
		font-size: 0.8rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.8rem;
	`}
`;

export const Info = styled.div`
	display: flex;
	div {
		margin-right: 1rem;
	}
`;

export const Modify = styled.div`
	cursor: pointer;
	display: flex;
	div {
		margin-left: 1rem;
	}
`;

export const ContentWrap = styled.div`
	border-top: solid 1px #fff;
	padding: 1.5rem;
	font-size: 1.2rem;
	color: #000;
	${({theme}) => theme.media.tablet`
		font-size: 0.9rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.9rem;
	`}
`;

export const LikeWrap = styled.div`
	display: flex;
	justify-content: center;
	border-bottom: solid 2px #929191;
`;

export const LikesBox = styled.div<{boxState?: boolean;}>`
	cursor: pointer;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 2rem 0;
	border: solid 2px #518EDB;
	width: 6rem;
	height: 3.5rem;
	font-size: 1.2rem;
	font-weight: 700;
	color: ${(props) => props.boxState ? '#fff' : '#518EDB'};
	background: ${(props) => props.boxState && '#518EDB' };
	svg path {
    stroke: ${(props) => props.boxState ? '#fff' : '#518EDB'};
	}
	div:nth-child(1) {
		font-size: 1.8rem;
	}
	${({theme}) => theme.media.tablet`
		width: 5rem;
		height: 3rem;
		font-size: 1rem;
		div:nth-child(1) {
			font-size: 1.5rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		width: 5rem;
		height: 3rem;
		font-size: 1rem;
		div:nth-child(1) {
			font-size: 1.5rem;
		}
	`}
`;

export const CommentContainer = styled.div`
	border-top: solid 1px #fff;
	padding: 0.3rem;
`;

export const CommentCount = styled.div`
	margin: 10px 5px 0;
	font-size: 1.2rem;
	font-weight: 600;
	color: black;
	${({theme}) => theme.media.tablet`
		font-size: 0.9rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.9rem;
	`}
`;


// export const CommentInput = styled.div`
// 	display: grid;
// 	grid-template-rows: 2f 1f;
// 	margin: 5px 0;
// 	border-top: solid 2px #000;
// 	border-left: solid 2px #000;
// 	border-right: solid 2px #fff;
// 	border-bottom: solid 2px #fff;
// 	padding: 0.3rem;
// 	background: #fff;
// 	font-size: 1.2rem;
// 	textarea {
// 		margin: 0.2rem 0;
// 		resize: none;
// 		border: none;
// 		height: 4rem;
// 	}
// 	div {
// 		display: flex;
// 		justify-content: space-between;
// 		align-items: flex-end;
// 		span {
// 			font-size: 1rem;
// 			color: #929191;
// 			padding: 0 2px;
// 		}
// 		input {
// 			cursor: pointer;
// 			background: #518EDB;
// 			border-top: solid 2px #fff;
// 			border-left: solid 2px #fff;
// 			border-right: solid 2px #000;
// 			border-bottom: solid 2px #000;
// 			padding: 0.2rem 0.8rem;
// 			font-size: 1.2rem;
// 			font-weight: 700;
// 			letter-spacing: 0.2rem;
// 			color: #fff;
// 		}
// 	}
// 	${({theme}) => theme.media.tablet`
// 		textarea {
// 			font-size: 0.9rem;
// 		}
// 		div {
// 			font-size: 1rem;
// 			span {
// 				font-size: 0.8rem;
// 			}
// 			input {
// 				font-size: 1rem;
// 			}
// 		}
// 	`}
// 	${({theme}) => theme.media.desktop`
// 		textarea {
// 			font-size: 0.9rem;
// 		}
// 		div {
// 			font-size: 1rem;
// 			span {
// 				font-size: 0.8rem;
// 			}
// 			input {
// 				font-size: 1rem;
// 			}
// 		}
// 	`}
// `;

export const FLine = styled.div`
	border-top: solid 1px #929191;
`;

export const CommentListWrap = styled.div`
	border-top: solid 1px #fff;
`;
