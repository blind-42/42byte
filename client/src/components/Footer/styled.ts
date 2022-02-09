import styled from 'styled-components';

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	height: 15vh;
	background: #E5E5E5;
	padding: 1rem;
`;

export const List = styled.div`
	display: flex;
	justify-content: space-evenly;
	span {
		margin: 0 1rem;
		font-size: 1rem;
		font-weight: 700;
	}
	@media screen and (min-width: 768px){
		span {
			margin: 0 1.5rem;
			font-size: 0.8rem;
			font-weight: 700;
		}
	}
`;

export const Detail = styled.div`
	font-size: 1rem;
	@media screen and (min-width: 768px) {
		font-size: 0.8rem;
	}
`;