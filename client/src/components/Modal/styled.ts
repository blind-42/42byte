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

export const ModalContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	width: 35vh;
	background: #C4C4C4;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 3px;
	@media screen and (min-width: 768px) {
		width: 45vh;
	}
`;

export const ContentContainer = styled.div`
	margin: 1.5rem;
	text-align:center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

export const LoginImg = styled.div`
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
	@media screen and (min-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 0 2rem;
	input {
	background: #518EDB;
	border-top: solid 2px #fff;
	border-left: solid 2px #fff;
	border-right: solid 2px #000;
	border-bottom: solid 2px #000;
	padding: 0.5rem 1.3rem;
	font-size: 1.2rem;
	font-weight: 700;
	letter-spacing: 0.2rem;
	color: #fff;
	}
	.cancel {
			background: #929191;
		}
`;