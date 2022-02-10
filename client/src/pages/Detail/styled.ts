import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Left = styled.div``;

export const Right = styled.div``;

export const MainContainer = styled.div`
	display: flex;
	height: 79vh;
	flex-direction: column;
	align-items: center;
`;

export const PostWrap = styled.div`
	margin-top: 2rem;
	border: solid 2px black;
	padding: 1rem;
	width: 80vw;	
	background: #ffff;
	@media screen and (min-width: 768px) {
		width: 50vw;
  }
`;

export const Title = styled.div`
	font-size: 1.3rem;
	font-weight: 700;
`;

export const Detail = styled.div`
	display: flex;
	margin-top: 0.7rem;
	padding-bottom: 0.5rem;
	border-bottom: solid 1px black;
	font-size: 0.8rem;
	font-weight: 700;
	color: #929191;
	justify-content: space-between;
	.left {
		display: flex;
		div {
			margin-right: 0.8rem;
		}
	}
	.right {
		display: flex;
		div {
			margin-left: 0.8rem;
		}
	}
`;

export const ContentWrap = styled.div`
	margin: 1.5rem 0.5rem 2rem 0.5rem;
	word-spacing: 0.02rem;
	line-height: 150%;
	font-size: 1rem;
`;

export const LikesWrap = styled.div`
	display: flex;
	justify-content: center;
	margin: 3rem 0 1rem 0;
`;

export const LikesBox = styled.div<{boxState?: boolean;}>`
		display: flex;
		justify-content: center;
		border: solid 2px ${(props) => props.boxState ? 'red' : 'gray'};;
		padding: 0.5rem;
		width: 5rem;
		.likesIcon {
			margin-right: 0.5rem;
			font-size: 1.2rem;
		}
		.CountGray {
			font-size: 1.2rem;
			font-weight: 700;
			color: gray;
		}
		.CountRed {
			font-size: 1.2rem;
			font-weight: 700;
			color: red;
		}
	}
`;

export const CommentContainer = styled.div`
	margin-top: 2rem;
	.commentCount {
		margin-left: 1rem;
		font-size: 1.2rem;
		font-weight: 700;
		color: black;
	}
`;

export const CommentInput = styled(PostWrap)`
	display: flex;
	flex-direction: column;
	position:relative;
	margin: 0.5rem 0 1rem 0;
	border: solid 2px gray;
	height: 7rem;
	textarea {
		border:0 solid black;
		height: 3rem;
		font-size: 1rem;
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
		color: white;
	}
`;

export const CommentList = styled.div`
	border-top: solid 1px #929191;
`;