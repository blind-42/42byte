import styled from 'styled-components';

export const ModalBackdrop = styled.div`
	position: fixed;
  top: 0;
  left: 0;
  z-index: var(--modal-index);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LoadingModalBackdrop = styled.div`
  top: 0;
  left: 0;
  z-index: var(--modal-index);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 23rem;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 3px;
`;

export const ReportModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 100vw;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 3px;
	${({theme}) => theme.media.tablet`
		width: 30rem;
	`}
	${({theme}) => theme.media.desktop`
		width: 30rem;
	`}
`;

export const ContentContainer = styled.div`
	margin: 1.5rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const ModalImg = styled.div`
	img {
		height: 5rem;
	}
`;

export const TextWrap = styled.div`
	margin: 1.5rem;
	letter-spacing: 0.1rem;
	font-size: 1.3rem;
	font-weight: 600;
	color: #000;
	${({theme}) => theme.media.tablet`
		font-size: 1.2rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 1.2rem;
	`}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 0 2rem;
	input {
		cursor: pointer;
		background: #518EDB;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
		padding: 0.5rem 1.3rem;
		font-size: 1.3rem;
		font-weight: 700;
		letter-spacing: 0.2rem;
		color: #fff;
	}
	.cancel {
		background: #929191;
	}
	${({theme}) => theme.media.tablet`
		input {
			font-size: 1rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		input {
			font-size: 1rem;
		}
	`}
`;

export const Instruction = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	text-align: left;
	div:nth-child(1) {
		font-size: 1.2rem;
		font-weight: 500;
	}
	div:last-child {
		font-size: 0.8rem;
		margin: 0.5rem 0;
	}
	${({theme}) => theme.media.tablet`
		div:nth-child(1) {	
			font-size: 0.9rem;
		}
		div:last-child {	
			font-size: 0.7rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div:nth-child(1) {	
			font-size: 0.9rem;
		}
		div:last-child {	
			font-size: 0.7rem;
		}
	`}
`;

export const ReportBox = styled.div`
	border-top: solid 1px #000;
	border-left: solid 1px #000;
	border-right: solid 1px #fff;
	border-bottom: solid 1px #fff;
	margin: 1.5rem 0;
	padding: 1.5rem 1rem;
	${({theme}) => theme.media.tablet`
		margin: 1rem 0;
		padding: 1.2rem 0.7rem;
	`}
	${({theme}) => theme.media.desktop`
		margin: 1rem 0;
		padding: 1.2rem 0.7rem;
	`}
`;

export const ListName = styled.div`
	text-align: left;
	margin: 0 0.5rem;
	font-size: 1.3rem;
	font-weight: 700;
	${({theme}) => theme.media.tablet`
		font-size: 1rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 1rem;
	`}
`;

export const ReportList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	div {
		display: flex;
		align-items: center;
		font-weight: 500;
		font-size: 1.2rem;
		margin-top: 1rem;
		input {
			margin-right: 0.5rem;
			height: 1.2rem;
			width: 1.2rem;
		}
		textarea {
			margin-left: 2rem;
			resize: none;
			border: solid 1px #929191;
			width: 20rem;
		}
	}
	${({theme}) => theme.media.tablet`
		div {	
			font-size: 0.9rem;
			margin-top: 0.7rem;
			input {
				margin-right: 0.3rem;
				height: 0.9rem;
				width: 0.9rem;
			}
		}
	`}
	${({theme}) => theme.media.desktop`
		div {	
			font-size: 0.9rem;
			margin-top: 0.7rem;
			input {
				margin-right: 0.3rem;
				height: 0.9rem;
				width: 0.9rem;
			}
		}
	`}
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
	.last {
		height: 2.2rem;
		width: 1.7rem;
		background: #c4c4c4;
	}
`;