import styled from 'styled-components';

export const FooterWrap = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 15vh;
	background: #E5E5E5;
	padding: 5vh 20vw 1.5vw 30vh;
`;

export const List = styled.div`
	flex: 5;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	padding-bottom: 3vh;
	span {
		font-weight: bolder;
	}
`;

export const Detail = styled.div`
	flex: 5;
`;