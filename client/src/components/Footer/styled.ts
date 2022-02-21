import styled from 'styled-components';

export const FooterWrap = styled.div`
	align-self: end;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 10vh;
	background: #C4C4C4;
	padding: 1rem;
	${({theme}) => theme.media.tablet`
		height: 8vh;
	`}
	${({theme}) => theme.media.desktop`
		height: 8vh;
	`}
`;

export const List = styled.div`
	display: flex;
	justify-content: space-evenly;
	div {
		margin: 0 1rem;
		font-size: 1rem;
		font-weight: 700;
	}
	${({theme}) => theme.media.tablet`
		div {
			margin: 0 1.5rem;
			font-size: 0.8rem;
			font-weight: 700;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			margin: 0 1.5rem;
			font-size: 0.8rem;
			font-weight: 700;
		}
	`}
`;

export const Detail = styled.div`
	font-size: 1rem;
	${({theme}) => theme.media.tablet`
		font-size: 0.8rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.8rem;
	`}
`;