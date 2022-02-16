import styled from 'styled-components';

export const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	background: #C4C4C4;
	height: 85vh;
	@media screen and (min-width: 768px) {
	}
`;

export const MenuWrap = styled.div`
	background: #C4C4C4;
	display: flex;
	align-items: center;
	margin: 3px 0;
	@media screen and (min-width: 768px) {
		margin: 0;
	}
`;

export const PostMenu = styled.div<{state?: string;}>`
	button {
		background: ${(props) => props.state === 'post' ? '#D5D5D5' : 'none'};
		border-top: solid 2px ${(props) => props.state === 'post' ? '#000' : '#C4C4C4'};
		border-left: solid 2px ${(props) => props.state === 'post' ? '#000' : '#C4C4C4'};
		border-right: solid 2px ${(props) => props.state === 'post' ? '#fff' : '#C4C4C4'};
		border-bottom: solid 2px ${(props) => props.state === 'post' ? '#fff' : '#C4C4C4'};
		font-size: 1.2rem;
		padding: 0.2rem 1.2rem;
	}
	@media screen and (min-width: 768px) {
		button {
			font-size: 0.9rem;
			padding: 0.1rem 1rem;
		}
	}
`;

export const CommentMenu = styled.div<{state?: string;}>`
	button {
		background: ${(props) => props.state === 'comment' ? '#D5D5D5' : 'none'};
		border-top: solid 2px ${(props) => props.state === 'comment' ? '#000' : '#C4C4C4'};
		border-left: solid 2px ${(props) => props.state === 'comment' ? '#000' : '#C4C4C4'};
		border-right: solid 2px ${(props) => props.state === 'comment' ? '#fff' : '#C4C4C4'};
		border-bottom: solid 2px ${(props) => props.state === 'comment' ? '#fff' : '#C4C4C4'};
		font-size: 1.2rem;
		padding: 0.2rem 1.2rem;
	}
	@media screen and (min-width: 768px) {
		button {
			font-size: 0.9rem;
			padding: 0.1rem 1rem;
		}
`;

export const PostContainer = styled.div`
	overflow-y: scroll;
	background: #C4C4C4;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	margin: 3px 0;
	padding: 3px;
	height: 75vh;
	@media screen and (min-width: 768px) {
		height: 72vh;
	}
`;

export const Category = styled.div`
	height: 2rem;
	display: grid;
	grid-template-columns: 6fr 1fr 1fr 2fr;
	justify-items: space-between;
	border-bottom: solid 2px #929191;
	div {
		place-self: center center;
		font-size: 1.2rem;
		font-weight: 600;
	}
	@media screen and (min-width: 768px) {
		height: 1.5rem;
		div {
			font-size: 0.9rem;
		}
	}
`;

export const ContentWrap = styled.div`
	border-top: solid 1px #fff;
	background: #D5D5D5;
`;

export const PostWrap = styled.div`
	border-bottom: solid 2px #fff;
`;


