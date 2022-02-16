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
	height: 85vh;
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
	@media screen and (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const Specific = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 0.2rem 0;
	border-bottom: solid 2px #929191;
	font-size: 1.1rem;
	@media screen and (min-width: 768px) {
		font-size: 0.8rem;
	}
`;

export const Info = styled.div`
	display: flex;
	div {
		margin-right: 1rem;
	}
`;

export const Modify = styled.div`
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
	@media screen and (min-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const LikeWrap = styled.div`
	display: flex;
	justify-content: center;
	border-bottom: solid 2px #929191;
`;

export const LikesBox = styled.div<{boxState?: boolean;}>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin: 2rem 0;
	border: solid 2px ${(props) => props.boxState ? 'red' : 'gray'};
	padding: 0.9rem 1.3rem;
	width: 6rem;
	font-size: 1.2rem;
	font-weight: 700;
	color: ${(props) => props.boxState ? 'red' : 'gray'};
	div {
		margin: 0 0.3rem;
	}
	@media screen and (min-width: 768px) {
		padding: 0.7rem 1rem;
		width: 5.5rem;
	}
`;

export const CommentContainer = styled.div`
	border-top: solid 1px #fff;
	padding: 0.3rem ;
`;

export const CommentCount = styled.div`
	margin: 10px 5px 0;
	font-size: 1.2rem;
	font-weight: 600;
	color: black;
	@media screen and (min-width: 768px) {
		font-size: 0.9rem;
	}
`;


export const CommentInput = styled.div`
	display: grid;
	grid-template-rows: 2f 1f;
	margin: 5px 0;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	padding: 0.3rem;
	background: #fff;
	font-size: 1.2rem;
	textarea {
		resize: none;
		border:0 solid #000;
		height: 4rem;
	}
	div {
		display: grid;
		grid-template-columns: 1fr 1fr;
		span {
			place-self: center start;
			color: #929191;
		}
		input {
			place-self: end;
			background: #518EDB;
			border-top: solid 2px #fff;
			border-left: solid 2px #fff;
			border-right: solid 2px #000;
			border-bottom: solid 2px #000;
			padding: 0.3 1.3rem;
			font-size: 1.2rem;
			font-weight: 700;
			letter-spacing: 0.2rem;
			color: #fff;
		}
}
	@media screen and (min-width: 768px) {
		textarea {
			font-size: 0.9rem;
		}
		div {
			font-size: 1rem;
			input {
			font-size: 1rem;
		}
		}
	}
`;

export const CommentListWrap = styled.div`
	border-top: solid 1px #929191;
`;
