import styled from 'styled-components';

export const PreviewContainer = styled.div<{state?: boolean;}>`
	display: grid;
	grid-template-columns: 1.2fr 6fr 1fr 1fr 2fr;
	justify-items: space-between;
	// border: ${(props) => props.state === true ? 'solid 1px #518EDB' : 'none'};
	border-bottom: solid 1px #929191;
	font-size: 1.2rem;
	height: 2.5rem;
	// background: ${(props) => props.state === true ? '#FFC5C6' : 'none'};
	div {
		place-self: center center;
	}
	div:nth-child(2) {
		place-self: center start;
		display: flex;
		align-items: center;
		h3 {
			font-weight: ${(props) => props.state === true ? '700' : '600'};
			margin-left: 0.8rem;
		}
		div:last-child {
			margin: 0 0.5rem;
			color: red;
			letter-spacing: 0.05rem;
			font-weight: ${(props) => props.state === true ? '700' : '600'};
		}
	}
	@media screen and (min-width: 768px) {
		height: 2.5rem;
		font-size: 0.9rem;
	}
`;

export const NoticeMark = styled.div`
	border: solid 1px red;
	font-size: 0.8rem;
	padding: 0.2rem 0.5rem;
`;