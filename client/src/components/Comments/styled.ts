import styled from 'styled-components';


export const CommentWrap = styled.div`
	border-bottom: solid 1px #929191;
	padding: 1.5rem 0.5rem 1.5rem 0.5rem;
	
`;

export const CommentTop = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	.left {
		display: flex;
		.name {
			margin-right: 0.8rem;
			font-size: 1rem;
		font-weight: 700;
		}
		.date {
			margin-right: 0.8rem;
			font-size: 0.8rem;
			color: #929191;
		}
	}
	.right {
		display: flex;
		div {
			margin-left: 0.8rem;
			font-size: 0.8rem;
			color: #929191;
		}
	}
`;

export const Content = styled.div``;

