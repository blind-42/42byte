import styled from 'styled-components';

export const MenuPostWrap = styled.div`
	display: grid;
	grid-template-rows: 2.5rem auto;
	${({theme}) => theme.media.tablet`
		grid-template-rows: 1.8rem auto;
	`}
	${({theme}) => theme.media.desktop`
		grid-template-rows: 1.8rem auto;
	`}
`;

export const MenuWrap = styled.div`
	background: #C4C4C4;
	display: flex;
	align-items: center;
`;

export const PostMenu = styled.div<{state?: string;}>`
	button {
		background: ${(props) => props.state === 'post' ? '#D5D5D5' : 'none'};
		border-top: solid 2px ${(props) => props.state === 'post' ? '#000' : '#C4C4C4'};
		border-left: solid 2px ${(props) => props.state === 'post' ? '#000' : '#C4C4C4'};
		border-right: solid 2px ${(props) => props.state === 'post' ? '#fff' : '#C4C4C4'};
		border-bottom: solid 2px ${(props) => props.state === 'post' ? '#fff' : '#C4C4C4'};
		font-size: 1.2rem;
		width: 8rem;
		height: 2.3rem;
	}
	${({theme}) => theme.media.tablet`
		button {
			font-size: 0.9rem;
			width: 6rem;
			height: 1.6rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		button {
			font-size: 0.9rem;
			width: 6rem;
			height: 1.6rem;
		}
	`}
`;

export const CommentMenu = styled.div<{state?: string;}>`
	button {
		background: ${(props) => props.state === 'comment' ? '#D5D5D5' : 'none'};
		border-top: solid 2px ${(props) => props.state === 'comment' ? '#000' : '#C4C4C4'};
		border-left: solid 2px ${(props) => props.state === 'comment' ? '#000' : '#C4C4C4'};
		border-right: solid 2px ${(props) => props.state === 'comment' ? '#fff' : '#C4C4C4'};
		border-bottom: solid 2px ${(props) => props.state === 'comment' ? '#fff' : '#C4C4C4'};
		font-size: 1.2rem;
		width: 8rem;
		height: 2.3rem;
	}
	${({theme}) => theme.media.tablet`
		button {
			font-size: 0.9rem;
			width: 6rem;
			height: 1.6rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		button {
			font-size: 0.9rem;
			width: 6rem;
			height: 1.6rem;
		}
	`}
`;

export const Category = styled.div<{state?: string;}>`
	display: grid;
	grid-template-columns: ${(props) => props.state === 'post' ? '1.2fr 6fr 1fr 1fr 2fr' : '1fr'};
	border-bottom: solid 2px #929191;
	font-size: 1.2rem;
	font-weight: 600;
	height: 2.5rem;
	div {
		place-self: center center;
	}
	${({theme}) => theme.media.tablet`
		font-size: 0.9rem;
		height: 2.2rem;
	`}
	${({theme}) => theme.media.desktop`
		font-size: 0.9rem;
		height: 2.2rem;
	`}
`;

export const ContentWrap = styled.div`
	border-top: solid 1px #fff;
	background: #D5D5D5;
`;

export const PostWrap = styled.div`
	border-bottom: solid 2px #fff;
`;


