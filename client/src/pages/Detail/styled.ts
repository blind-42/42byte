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
	background: #929191;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: 768px) {
		margin-left: 14vw;
  }
`;

export const PostWrap = styled.div`
	// display: flex;
	// flex-direction: column;
	// align-items: stretch;
	margin-top: 2rem;
	border: solid 2px black;
	padding: 1rem;
	height: 40vh;
	width: 80vw;	
	background: #ffff;
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
	justify-content: space-between;
	.left {
		display: flex;
		div {
			margin-right: 0.8rem
		}
	}
	.right {
		display: flex;
		div {
			margin-left: 0.8rem
		}
	}
`;

export const ContentWrap = styled.div`
	margin: 1.5rem 0.5rem 2rem 0.5rem;
`;

export const LikesButton = styled.div;