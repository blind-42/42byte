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
		height: 3.5vh;
		width: 9vw;
	}
	.writingButton {
		background: black;
		font-weight: bolder;
		color: white;
	}
`;

export const Search = styled.div`
	flex: 0.5;
	display: flex;
	.textInput {
		border: solid 1px black;
		height: 2.5vh;
		width: 7.5vw;
	}
	.searchButton {
		background: black;
		color: white;
		height: 2.5vh;
		width: 1.5vw;
	}
`;

export const MenuContent = styled.div`
	flex: 8;
`;