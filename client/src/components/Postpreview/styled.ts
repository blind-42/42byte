import styled from 'styled-components';

export const PreviewContainer = styled.div`
	display: grid;
	grid-template-columns: 6fr 1fr 1fr 2fr;
	justify-items: space-between;
	border-bottom: solid 1px #929191;
	font-size: 1.2rem;
	padding: 0.5rem 0;
	h3 {
		margin: 0 0.8rem;
		place-self: center start;
		font-weight: 600;
	}
	div {
		place-self: center center;
	}
	@media screen and (min-width: 768px) {
		font-size: 0.9rem;
		padding: 0.3rem 0;
	}
`;
