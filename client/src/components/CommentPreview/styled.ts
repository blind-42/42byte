import styled from 'styled-components';

export const CommentPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	border-bottom: solid 1px #929191;
	padding: 0.5rem 1.5rem;
	height: 5.5rem;
	@media screen and (min-width: 768px) {
		height: 4.2rem;
	}
`;

export const CommentWrap = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.2rem;
	font-weight: 600;
	div:nth-child(2) {
		font-size: 1.1rem;
		font-weight: 400;
	}
	@media screen and (min-width: 768px) {
		font-size: 0.9rem;
		div:nth-child(2) {
			font-size: 0.8rem;
		}
	}
`;

export const OriginalPost = styled.div`
	display: flex;
	font-size: 1.3rem;
	font-weight: 600;
	color: #737272;
	div {
		margin-left: 0.5rem;
		color: #BF2D2D;
		letter-spacing: 0.05rem;
	}
	@media screen and (min-width: 768px) {
		font-size: 0.9rem;
	}
`;