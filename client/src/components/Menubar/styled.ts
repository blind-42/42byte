import styled from 'styled-components';

export const MenubarWrap = styled.div`
	position: absolute;
	top: 6vh;
	left: 0;
	display: flex;
	flex-direction: column;
	background: #C4C4C4;
	border: solid 2px black;
	height: 94vh;
	width: 65vw;
	align-items: center;
	padding: 3rem;
	@media screen and (min-width: 768px) {
		position: absolute;
		top: 6vh;
		left: 0;
		display: flex;
		flex-direction: column;
		background: #C4C4C4;
		border: solid 2px black;
		height: 94vh;
		width: 14vw;
		align-items: center;
		padding: 3rem;
  }
`;

export const Button = styled.div`
	input {
		height: 6vh;
		width: 45vw;
		background: black;
		font-weight: bolder;
		font-size: 2.6vh;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 1rem;
	}
	@media screen and (min-width: 768px) {
		input {
			height: 4.5vh;
			width: 11vw;
			background: black;
			font-weight: bolder;
			font-size: 2vh;
			color: white;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 1rem;
		}
	}
`;

export const Search = styled.div`
	display: flex;
	justify-content: space-between;
	border: solid 1px black;
	height: 4vh;
	width: 45vw;
	background: white;
	.searchText {
		font-size: 2vh;
		display: flex;
		align-items: center;
		text-overflow: clip;
		padding-left: 0.2rem;
	}
	.searchButton {
		margin-top: -1px;
		background: black;
		color: white;
		height: 4vh;
		width: 4vh;
	}
	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
		border: solid 1px black;
		height: 3vh;
		width: 11vw;
		background: white;
		.searchText {
			font-size: 1.5vh;
			display: flex;
			align-items: center;
			text-overflow: clip;
			padding-left: 0.2rem;
		}
		.searchButton {
			margin-top: -1px;
			background: black;
			color: white;
			height: 3vh;
			width: 3vh;
		}
	}
`;

export const MenuContent = styled.div`
	flex: 8;
`;
