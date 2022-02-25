import styled from "styled-components";

export const MenuContentWrap = styled.div`
	display: grid;
	grid-template-rows: 2.5rem auto;
	${({theme}) => theme.media.tablet`
		grid-template-rows: 1.8rem auto;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 1.8rem auto;
	`}
`;

export const MenuWrap = styled.div`
	background: #C4C4C4;
	display: flex;
	align-items: center;
	overflow-x: scroll;
	button {
		margin: 0 1.5px;
		font-size: 1rem;
		height: 2.3rem;
		width: 8rem;
	}
	${({theme}) => theme.media.tablet`
		button {
			font-size: 0.9rem;
			height: 1.6rem;
			width: 8rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		button {
			font-size: 0.9rem;
			height: 1.6rem;
			width: 7rem;
		}
	`}
`;

export const ContentWrap = styled.div`
	margin: 3px 0;
	height: 80vh;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	${({theme}) => theme.media.tablet`
		height: 70vh;
	`}
`;