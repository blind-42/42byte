import styled from 'styled-components';


export const CommentWrap = styled.div`
	border-bottom: solid 1px #929191;
	padding: 1rem 0.5rem;
	@media screen and (min-width: 768px) {
		padding: 0.5rem;
	}
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
	font-size: 1.2rem;
	color: #000;
	@media screen and (min-width: 768px) {
		font-size: 0.8rem;
}
`;

export const Line = styled.div`
	border-top: solid 1px #fff;
`;

