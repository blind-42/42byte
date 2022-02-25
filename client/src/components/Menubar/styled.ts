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
	height: 80vh;
	width: 25rem;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	${({theme}) => theme.media.tablet`
		height: 70vh;
		width: 21rem;
  `}
	${({theme}) => theme.media.desktop`
		height: 75vh;
		width: 17rem;
	`}
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
		padding-bottom: 3px;
	}
	${({theme}) => theme.media.tablet`
		div {
			font-size: 1.2rem;
			width: 1.5rem;
			height: 1.5rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			font-size: 1rem;
			width: 1.2rem;
			height: 1.2rem;
		}
	`}
`;

export const UserProfileWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	border-bottom: solid 2px #929191;
	${({theme}) => theme.media.tablet`
		padding: 1.5rem 0;
	`}
	${({theme}) => theme.media.desktop`
		padding: 1.2rem 0;
	`}
`;

export const UserImg = styled.div`
  display: flex;
  align-items: center;
	margin-bottom: 1.2rem;
  img {
    border-radius: 50%;
    height: 4.2rem;
		border: solid 1px #fff;
  }
	${({theme}) => theme.media.tablet`
		img {
			height: 3.3rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		img {
			height: 3.3rem;
		}
	`}
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
	font-weight: 700;
	${({theme}) => theme.media.tablet`
		font-size: 1.2rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 1rem;
	`}
`;

export const UserMenu = styled.div`
	display: flex;
	margin-top: 0.8rem;
	div {
		margin: 0 1rem;
		font-size: 1.3rem; 
		cursor: pointer;
	}
	${({theme}) => theme.media.tablet`
		div {
			margin: 0 0.5rem;
			font-size: 1.1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			margin: 0 0.5rem;
			font-size: 0.9rem;
		}
	`}
`;

export const UtilWrap = styled.div`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: solid 2px #fff;
	${({theme}) => theme.media.tablet`
		padding: 1.2rem 0;
	`}
	${({theme}) => theme.media.desktop`
		padding: 1.2rem 0;
	`}
`;

export const WritingButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0.5rem 0;
	input {
		cursor: pointer;
		height: 3.5rem;
		width: 11rem;
		background: #518EDB;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		font-weight: 600;
		font-size: 1.5rem;
		color: #fff;
	}
	${({theme}) => theme.media.tablet`
		input {
			height: 2.8rem;
			width: 9rem;
			font-size: 1.2rem;
			font-weight: 700;
		}
	`}
	${({theme}) => theme.media.desktop`
		input {
			height: 2.4rem;
			width: 8rem;
			font-size: 1rem;
			font-weight: 700;
		}
	`}
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
		font-size: 1.2rem;
		width: 14rem;
		display: flex;
		padding-left: 0.3rem;
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
		display: flex;
		align-items: center;
		justify-content: center;
		div {
			font-size: 1.3rem;
		}
	}
	${({theme}) => theme.media.tablet`
		height: 1.8rem;
		margin: 0.3rem 0;
		input {
			font-size: 1rem;
			width: 11rem;
		}
		button {
			height: 1.8rem;
			width: 1.8rem;
			div {
				font-size: 1.1rem; 
			}
		}
	`}
	${({theme}) => theme.media.desktop`
		height: 1.7rem;
		margin: 0.3rem 0;
		input {
			font-size: 0.8rem;
			width: 10rem;
		}
		button {
			height: 1.7rem;
			width: 1.7rem;
			div {
				font-size: 0.9rem; 
			}
		}
	`}
`;

export const MenuListWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0;
	li {
		cursor: pointer;
		font-size: 1.3rem;
		font-weight: 400;
	}
	${({theme}) => theme.media.tablet`
		margin: 1rem 0;
		li {
			font-size: 1.1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		margin: 0.7rem 0;
		li {
			font-size: 0.9rem;
		}
	`}
`;
