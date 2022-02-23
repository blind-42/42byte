import styled from 'styled-components';

export const LogoImg = styled.div`
	height: 3rem;
	img {
		height: 3rem;
	}
`;

export const LoadingBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0 1rem;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	padding: 0.3rem;
	div {
		height: 2.2rem;
		width: 1.7rem;
		background: #518EDB;
	}
`;