import styled from 'styled-components';

export const MenubarWrap = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	background: #C4C4C4;
	border: solid 2px black;
	height: 100vh;
	width: 10vw;
	align-items: center;
`;

export const Logo = styled.div`
	flex: 1;
  .logoImg {
		padding: 1rem;
		height: 5vh;
		}
`;

export const Button = styled.div`
	flex: 0.5;
	input {
		height: 2rem;
		width: 9rem;
	}
	.writingButton {
		background: black;
		color: white;
	}
`;

export const Search = styled.div`
	flex: 0.5;
	display: flex;
	.textInput {
		height: 1.5rem;
		width: 7.5rem;
	}
	.searchButton {
		background: black;
		color: white;
		height: 1.5rem;
		width: 1.5rem;
	}
`;

export const MenuContent = styled.div`
	flex: 8;
`;