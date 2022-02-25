import styled from 'styled-components';

export const UtilPostWrap = styled.div`
	display: grid;
	grid-template-rows: 2.5rem auto;
	${({theme}) => theme.media.tablet`
		grid-template-rows: 1.8rem auto;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 1.8rem auto;
	`}
`;

export const UtilWrap = styled.div`
	background: #C4C4C4;
	display: flex;
	align-items: center;
	justify-content: end;
`;

export const Search = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	height: 2.3rem;
	background: #fff;
	input {
		font-size: 1.1rem;
		display: flex;
		padding-left: 0.2rem;
		border: none;
		width: 15rem;
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
		height: 2.3rem;
		width: 2.3rem;
		div {
			font-size: 1.2rem;
			transform: rotate(100deg);
		}
	}
	${({theme}) => theme.media.tablet`
		height: 1.6rem;
		input {
			font-size: 0.8rem;
			width: 12rem;
		}
		button {
			height: 1.6rem;
			width: 1.6rem;
			div {
				font-size: 1rem; 
			}
		}
	`}
	${({theme}) => theme.media.desktop`
		height: 1.6rem;
		input {
			font-size: 0.8rem;
			width: 12rem;
		}
		button {
			height: 1.6rem;
			width: 1.6rem;
			div {
				font-size: 1rem; 
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
		height: 2.3rem;
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

export const ContentWrap = styled.div`
	border-top: solid 1px #fff;
	background: #D5D5D5;
`;

export const PostWrap = styled.div`
	border-bottom: solid 2px #fff;
`;
