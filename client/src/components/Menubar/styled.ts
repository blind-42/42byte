import styled from 'styled-components';

export const MenubarContainer = styled.div`
	z-index: 1;
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
		width: 21rem;
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

export const ContentContainer = styled.div`
	display: grid;
	grid-template-rows: 1fr 9rem 3.5rem;
	/* height: 80vh; */
	${({theme}) => theme.media.tablet`
		grid-template-rows: 1fr 7rem 2.5rem;
		// height: 70vh;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 1fr 6rem 2.5rem;
		// height: 75vh;
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
	justify-content: center;
`;

export const UserImg = styled.div`
  display: flex;
  align-items: center;
	margin-bottom: 1.2rem;
  img {
    border-radius: 50%;
    height: 4rem;
		border: solid 1px #fff;
  }
	${({theme}) => theme.media.tablet`
		margin-bottom: 0.7rem;
		img {
			height: 3rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		margin-bottom: 0.7rem;
		img {
			height: 2.5rem;
		}
	`}
`;

export const UserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
	font-weight: 700;
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
	align-items: stretch;
	padding-top: 1.5rem;
	span {
		padding-left: 1.7rem;
		font-size: 1.4rem; 
		cursor: pointer;
	}
	${({theme}) => theme.media.tablet`
		padding-top: 1rem;	
		span {
			padding-left: 1rem;
			margin: 0 0.5rem;
			font-size: 1.1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		padding-top: 0.8rem;
		span {
			padding-left: 1rem;
			margin: 0 0.5rem;
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
		font-weight: 600;
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
			width: 20rem;
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
	}
	${({theme}) => theme.media.tablet`
		height: 1.8rem;
		form {
			input {
				font-size: 1rem;
				width: 17rem;
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
		margin: 0.5rem;
	}
	${({theme}) => theme.media.tablet`
		height: 1.8rem;
		font-size: 1.1rem;
		img {
			height: 1.4rem;
			margin: 0.5rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		height: 1.5rem;
		font-size: 0.8rem;
		img {
			height: 1.1rem;
			margin: 0.5rem;
		}
	`}
`;

export const BoardNames = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 2rem 0;
	div {
		width: 18rem;
		cursor: pointer;
		font-size: 1.5rem;
		font-weight: 400;
		margin-bottom: 1.5rem;
	}
	${({theme}) => theme.media.tablet`
	div {
		width: 14rem;
		font-size: 1.1rem;
		margin-bottom: 1.1rem;
	}
	`}
	${({theme}) => theme.media.desktop`
	div {
		width: 13rem;
		font-size: 0.9rem;
		margin-bottom: 0.9rem;
	}
	`}
`;