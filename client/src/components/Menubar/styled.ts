import styled from 'styled-components';

export const MenubarContainer = styled.div`
	position: fixed;
	bottom: 3rem;
	left: 0;
	padding: 3px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	background: #C4C4C4;
	width: 25rem;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	${({theme}) => theme.media.tablet`
		width: 18em;
		bottom: 2.5rem;
  `}
	${({theme}) => theme.media.desktop`
		width: 17rem;
		bottom: 2.5rem;
	`}
`;

export const Topbar = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-end;
	background: #518EDB;
	div {
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #C4C4C4;
		font-size: 1.2rem;
		font-weight: 900;
		width: 1.5rem;
		height: 1.5rem;
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
			font-size: 1rem;
			width: 1.3rem;
			height: 1.3rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			font-size: 1rem;
			width: 1.3rem;
			height: 1.3rem;
		}
	`}
`;

export const ContentContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 9rem 3.5rem;
	${({theme}) => theme.media.tablet`
		grid-template-rows: 1fr 7rem 2.5rem;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 1fr 6rem 2.5rem;
	`}
`;
export const UserProfileWrap = styled.div`
	display: grid;
	grid-template-columns: 2fr 3fr;
	border-top: solid 2px #fff;
`;

export const Profile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 12px 0 6px 0;
`;

export const UserImg = styled.div<{state?: boolean;}>`
  display: flex;
  align-items: center;
  img {
    height: 5.3rem;
		border: solid 2px #929191;
  }
	${({theme}) => theme.media.tablet`
		img {
			height: 4rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		img {
			height: 3.5rem;
		}
	`}
`;

export const UserName = styled.div`
  font-size: 1.5rem;
	font-weight: 600;
	div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	${({theme}) => theme.media.tablet`
		font-size: 1.1rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.9rem;
	`}
`;

export const UserMenu = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-top: 1.5rem;
	span {
		padding-left: 1.7rem;
		font-size: 1.4rem;
		font-weight: 500;
		cursor: pointer;
	}
	${({theme}) => theme.media.tablet`
		padding-top: 1rem;	
		span {
			padding-left: 1rem;
			font-size: 1.1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		padding-top: 0.8rem;
		span {
			padding-left: 1rem;
			font-size: 0.9rem;
		}
	`}
`;

export const WritingBtn = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 3px 6px;
	padding: 0;
	input {
		cursor: pointer;
		height: 2.5rem;
		width: 13rem;
		background: #518EDB;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		font-weight: 700;
		font-size: 1.3rem;
		color: #fff;
	}
	${({theme}) => theme.media.tablet`
		input {
			height: 1.8rem;
			width: 12rem;
			font-size: 1.2rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		input {
			height: 1.7rem;
			width: 9rem;
			font-size: 0.9rem;
		}
	`}
`;

export const UtilWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: flex-end;
	padding: 3px;
`;

export const Search = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	height: 2.5rem;
	margin: 3px;
	background: #fff;
	form {
		display: flex;
		justify-content: space-between;
		align-items: center;
		input {
			font-size: 1.2rem;
			line-height: 1.2rem;
			width: 20rem;
			display: flex;
			margin: 2px;
			padding-left: 0.3rem;
			border: none;
			background: none;
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
	}
	${({theme}) => theme.media.tablet`
		height: 1.8rem;
		form {
			input {
				font-size: 1rem;
				width: 13rem;
			}
			button {
				height: 1.8rem;
				width: 1.8rem;
				div {
					font-size: 1.1rem; 
				}
			}
		}
	`}
	${({theme}) => theme.media.desktop`
		height: 1.7rem;
		form {
			input {
				font-size: 0.8rem;
				width: 13rem;
			}
			button {
				height: 1.7rem;
				width: 1.7rem;
				div {
					font-size: 0.9rem; 
				}
			}
		}
	`}
`;


export const WritingButton = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 3px;
	input {
		cursor: pointer;
		background: #518EDB;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		font-size: 1.2rem;
		font-weight: 600;
		height: 2.4rem;
		width: 6.5rem;
		color: #fff;
	}
	${({theme}) => theme.media.tablet`
		input {
			font-size: 0.9rem;
			font-weight: 700;
			height: 1.6rem;
			width: 5rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		input {
			font-size: 0.9rem;
			font-weight: 700;
			height: 1.6rem;
			width: 5rem;
		}
	`}
`;
export const BoardListWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 3px 0;
	border-bottom: solid 2px #929191;
`;

export const WrapTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background: #D5D5D5;
	color: #000;
	height: 2.5rem;
	font-family: 'Press Start 2P', cursive;
	font-size: 1.3rem;
	font-weight: 500;
	img {
		height: 2rem;
		margin: 0 0.5rem;
	}
	${({theme}) => theme.media.tablet`
		height: 1.8rem;
		font-size: 0.9rem;
		img {
			height: 1.4rem;
			margin: 0 0.3rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		height: 1.7rem;
		font-size: 0.8rem;
		img {
			height: 1.3rem;
			margin: 0 0.3rem;
		}
	`}
`;

export const BoardNames = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 23rem;
	padding: 0.5rem 0;
	div {
		cursor: pointer;
		display: flex;
		align-items: center;
		width: 18rem;
		font-size: 1.5rem;
		font-weight: 450;
		img {
			height: 1.6rem;
			margin-right: 0.5rem;
		}
	}
	${({theme}) => theme.media.tablet`
		height: 16rem;
		div {
			width: 13rem;
			font-size: 1rem;
			img {
				height: 1.2rem;
			}
		}
	`}
	${({theme}) => theme.media.desktop`
		height: 16rem;
		div {
			width: 13rem;
			font-size: 0.9rem;
			img {
				height: 1.1rem;
			}
		}
	`}
`;