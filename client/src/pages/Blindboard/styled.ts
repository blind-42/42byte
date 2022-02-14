import styled from 'styled-components';

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
	padding: 3px;
	height: 85vh;
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

export const PostWrap = styled.div`
	display: grid;
	// grid-template-rows: repeat(20, 1fr);
	align-content: space-between;
	align-items: center;
	background: #D5D5D5;
	border-bottom: solid 2px #fff;
`;

export const ContentWrap = styled.div`
	overflow-y: scroll;
	border-top: solid 1px #fff;
`;