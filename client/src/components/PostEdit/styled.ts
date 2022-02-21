import styled from 'styled-components';

export const EditorContainer = styled.div`
	display: grid;
	grid-template-rows: 3rem auto;
	${({theme}) => theme.media.tablet`
		grid-template-rows: 2rem auto;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 2rem auto;
	`}
`;

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
	${({theme}) => theme.media.tablet`
		input {
			font-size: 0.9rem;
			height: 2rem;
			width: 30rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		input {
			font-size: 0.9rem;
			height: 2rem;
			width: 30rem;
		}
	`}
`;

export const UploadButton = styled.div`
	display: flex;
	justify-content: flex-end;
	button {
		cursor: pointer;
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
	${({theme}) => theme.media.tablet`
		button {
			font-size: 0.9rem;
			height: 2rem;
			width: 4rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		button {
			font-size: 0.9rem;
			height: 2rem;
			width: 4rem;
		}
	`}
`;

export const EditorWrap = styled.div`
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	background: #D5D5D5;
	overflow-y: scroll;
	height: 
`;
