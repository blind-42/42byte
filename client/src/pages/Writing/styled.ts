import styled from 'styled-components';

export const TitleUploadWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Title = styled.div`
	input {
		font-size: 1.2rem;
		background: #D5D5D5;
		height: 3rem;
		width: 20rem;
		margin: 3px 3px 6px 0;
		border-top: solid 2px #000;
		border-left: solid 2px #000;
		border-right: solid 2px #fff;
		border-bottom: solid 2px #fff;
		padding: 0 1rem;
	}
	@media screen and (min-width: 768px) {
		input {
			font-size: 0.9rem;
			height: 2rem;
			width: 30rem;
		}
	}
`;

export const EditorWrap = styled.div`
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	background: #D5D5D5;
	overflow-y: scroll;
`;

export const UploadButton = styled.div`
	display: flex;
	justify-content: flex-end;
	button {
		background: #518EDB;
		color: #fff;
		font-size: 1.2rem;
		font-weight: 700;
		height: 3rem;
		width: 5rem;
		margin: 3px 3px 6px 3px;
		border-top: solid 2px #fff;
		border-left: solid 2px #fff;
		border-right: solid 2px #000;
		border-bottom: solid 2px #000;
	}
	@media screen and (min-width: 768px){
		button {
			font-size: 0.9rem;
			height: 2rem;
			width: 4rem;
		}
	}
`;