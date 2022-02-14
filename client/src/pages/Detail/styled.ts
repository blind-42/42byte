import styled from 'styled-components';

export const PostContainer = styled.div`
	background: #D5D5D5;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	padding: 3px;
	height: 85vh;
	@media screen and (min-width: 768px) {
	}
`;

export const DetailContainer = styled.div`
	margin: 5px;
	word-spacing: 0.02rem;
	line-height: 150%;
`;

export const Title = styled.div`
	margin: 5px 0;
	font-size: 1.5rem;
	font-weight: 600;
	color: #000;
`;

export const Specific = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 0;
	border-bottom: solid 2px #929191;
	font-size: 1.1rem;
	@media screen and (min-width: 768px) {
		font-size: 0.9rem;
	}
`;

export const Info = styled.div`
	display: flex;
	div {
		margin-right: 9px;
	}
`;

export const Modify = styled.div`
	display: flex;
	div {
		margin-left: 9px;
	}
`;

export const ContentWrap = styled.div`
	border-top: solid 1px #fff;
	padding: 15px;
	font-size: 1.2rem;
	color: #000;
	@media screen and (min-width: 768px) {
		font-size: 1rem;
	}
`;

export const LikeWrap = styled.div`
	display: flex;
	justify-content: center;
	border-bottom: solid 2px #929191;
`;

export const LikesBox = styled.div<{boxState?: boolean;}>`

	display: flex;
	justify-content: center;
	margin: 2rem 0;
	border: solid 2px ${(props) => props.boxState ? 'red' : 'gray'};
	padding: 1rem 1.5rem;
	width: 7rem;
	font-size: 1.2rem;
	font-weight: 700;
	color: ${(props) => props.boxState ? 'red' : 'gray'};
	div {
		margin: 0 3px;
	}
`;

export const CommentContainer = styled.div`
	border-top: solid 1px #fff;
	padding: 8px 5px;
`;

export const CommentCount = styled.div`
	margin: 10px 5px 0;
	font-size: 1.3rem;
	font-weight: 600;
	color: black;
`;


export const CommentInput = styled(ContentWrap)`
	display: flex;
	flex-direction: column;
	position:relative;
	margin: 5px 0;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	background: #fff;
	height: 7rem;
	textarea {
		border:0 solid black;
		margin: -1rem;
		height: 4rem;
		font-size: 1.2rem;
	}
	
	button {
		position: absolute;
		bottom: 0.3rem;
		right: 0.3rem;
		height: 2rem;
		width: 4rem;
		background: black;
		font-size: 1rem;
		font-weight: 700;
		letter-spacing: 0.2rem;
		color: #fff;
	}
	@media screen and (min-width: 768px) {
		textarea {
			margin: -0.7rem;
			font-size: 1rem;
		}
	}
`;

export const CommentListWrap = styled.div`
	border-top: solid 1px #929191;
`;
