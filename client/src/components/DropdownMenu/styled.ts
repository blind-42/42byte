import styled from "styled-components";

export const DropdownWrap = styled.div`
	position: relative;
	display: inline-block;
`;

export const Dots = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	div {
		height: 0.3rem;
		width: 0.3rem;
		border-radius: 50%;
		background: #929191;
		margin: 0.1rem 0;
	}
	${({theme}) => theme.media.tablet`
		div {
			height: 0.2rem;
			width: 0.2rem;
			margin: 0.07rem 0;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			height: 0.2rem;
			width: 0.2rem;
			margin: 0.07rem 0;
		}
	`}
`;

export const DropdownBox = styled.div`
	position: absolute;
	z-index: 1;
	right: 0;
	background: #D5D5D5;
	border-top: solid 1px #fff;
	border-left: solid 1px #fff;
	border-right: solid 1px #000;
	border-bottom: solid 1px #000;
	padding: 0.5rem 0;
	width: 4.5rem;
	${({theme}) => theme.media.tablet`
		width: 4rem;
		padding: 0.2rem 0;
	`}
	${({theme}) => theme.media.desktop`
		width: 4rem;
		padding: 0.2rem 0;
	`}
`;

export const MenuList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	div {
		cursor: pointer;
		font-size: 1rem;
	}
	${({theme}) => theme.media.tablet`
		div {
			font-size: 0.8rem;
		}
	`}
	${({theme}) => theme.media.desktop`
		div {
			font-size: 0.8rem;
		}
	`}
`;