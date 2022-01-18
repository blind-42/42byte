import styled from 'styled-components';

export const SelContainer = styled.div`
	height: 14rem;
	width: 25rem;
	border: solid 2px black;
`;

export const Topbar = styled.div`
	height: 1.8rem;
	background: #E0E0E0;
`;

export const MainContainer = styled.div`
	height: 12.2rem;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
`;

export const Phrases = styled.div`
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-evenly;
	input{
		height: 2.5rem;
		width: 6rem;
		margin: 0.3rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.positive{
		background: black;
		color: white;
	}
	.negative{
		background: #E0E0E0;
	}
`;