import styled from 'styled-components';

export const PreviewContainer = styled.div<{state?: boolean;}>`
	display: grid;
	grid-template-columns: 1.2fr 6fr 1fr 1fr 2fr;
	justify-items: space-between;
	border-bottom: solid 1px #929191;
	font-size: 1.1rem;
	height: 2.5rem;
	background: ${(props) => props.state === true ? '#DEDEDE' : 'none'};
	div {
		place-self: center center;
	}
	div:nth-child(2) {
		place-self: center start;
		display: flex;
		align-items: center;
		h3 {
			font-weight: ${(props) => props.state === true ? '800' : '500'};
			color: ${(props) => props.state === true ? '#BF2D2D' : '#000'};
			margin-left: 0.8rem;
		}
		div:last-child {
			margin: 0 0.5rem;
			color: #BF2D2D;
			letter-spacing: 0.05rem;
			font-weight: ${(props) => props.state === true ? '700' : '600'};
		}
	}
	${({theme}) => theme.media.tablet`
		height: 2.3rem;
		font-size: 0.9rem;
	`}
	${({theme}) => theme.media.desktop`
		height: 2.3rem;
		font-size: 0.9rem;
	`}
`;

export const NoticeMark = styled.div`
	font-size: 0.8rem;
	font-weight: 600;
	background: #BF2D2D;
	color: #fff;
	padding: 0.3rem 0.6rem;
	letter-spacing: 0.05rem;
	${({theme}) => theme.media.tablet`
		font-size: 0.7rem;
		padding: 0.3rem 0.5rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.7rem;
		padding: 0.3rem 0.5rem;
	`}
`;