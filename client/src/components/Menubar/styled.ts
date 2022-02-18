import styled from 'styled-components';

export const MenubarContainer = styled.div`
	z-index: 1;
	position: fixed;
	bottom: 4.5vh;
	left: 0;
	padding: 3px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	background: #C4C4C4;
	height: 70vh;
	width: 34vh;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	@media screen and (min-width: 768px) {
		height: 80vh;
  }
`;

export const ExitButton = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	background: #518EDB;
	cursor: pointer;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		background: #C4C4C4;
		font-size: 1.5rem;
		font-weight: 900;
		width: 2rem;
		height: 2rem;
		text-align: center;
		margin: 3px;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
	}
	@media screen and (min-width: 768px) {
		div {
			width: 1.2rem;
			height: 1.2rem;
			font-size: 1.2rem;
		}
	}
`;

export const UserProfileWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	border-bottom: solid 2px #929191;
`;

export const UserImg = styled.div`
  display: flex;
  align-items: center;
	margin-bottom: 1.2rem;
  img {
    border-radius: 50%;
    height: 6vh;
		border: solid 1px #fff;
  }
	@media screen and (min-width: 768px) {
		img {
			height: 7vh;
		}
	}
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
	font-weight: 700;
	@media screen and (min-width: 768px) {
		font-size: 1.1rem;
	}
`;

export const UserMenu = styled.div`
	display: flex;
	margin-top: 0.8rem;
	div {
		margin: 0 1rem;
		font-size: 1.3rem; 
		cursor: pointer;
	}
	@media screen and (min-width: 768px) {
		div {
			margin: 0 0.5rem;
			font-size: 1rem;
		}
	}
`;

export const UtilWrap = styled.div`
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: solid 2px #fff;
	@media screen and (min-width: 768px) {
	}
`;

export const WritingButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0.5rem 0;
	input {
		cursor: pointer;
		height: 3.5rem;
		background: #518EDB;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		font-weight: 600;
		font-size: 1.7rem;
		color: #fff;
		padding: 0 2rem;
	}
	@media screen and (min-width: 768px) {
		input {
			height: 2.4rem;
			font-size: 1rem;
			font-weight: 700;
		}
	}
`;

export const Search = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	height: 2.5rem;
	margin: 0.5rem 0;
	background: #fff;
	input {
		font-size: 1.3rem;
		display: flex;
		padding-left: 0.2rem;
		border: none;
	}
	button {
		cursor: pointer;
		margin-right: -2px;
		background: #518EDB;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		color: #fff;
		height: 2.5rem;
		width: 2.5rem;
		div {
			font-size: 1.5rem;
			transform: rotate(100deg);
		}
	}
	@media screen and (min-width: 768px) {
		height: 1.7rem;
		input {
			font-size: 0.9rem;
			padding-left: 0.2rem;
		}
		button {
			height: 1.7rem;
			width: 1.7rem;
			div {
				font-size: 1rem; 
			}
		}
	}
`;

export const MenuListWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0;
	li {
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 500;
	}
	@media screen and (min-width: 768px) {
		li {
			font-size: 1rem;
		}
	}
`;
