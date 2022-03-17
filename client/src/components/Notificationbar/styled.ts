import styled from 'styled-components';

export const NotificationContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 0;
  padding: 3px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #c4c4c4;
  border-top: solid 2px #fff;
  border-left: solid 2px #fff;
  border-right: solid 2px #000;
  border-bottom: solid 2px #000;
  ${({ theme }) => theme.media.tablet`
		left: 8.5rem;
		bottom: 2.5rem;
	`}
  ${({ theme }) => theme.media.desktop`
		left: 8.5rem;
		bottom: 2.5rem;
	`}
`;

export const Topbar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background: #518edb;
  div {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #c4c4c4;
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
  ${({ theme }) => theme.media.tablet`
		div {
			font-size: 1rem;
			width: 1.3rem;
			height: 1.3rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		div {
			font-size: 1rem;
			width: 1.3rem;
			height: 1.3rem;
		}
	`}
`;

export const EmptyNotificationMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 6rem;
  padding: 1rem;
  font-size: 1.3rem;
  ${({ theme }) => theme.media.tablet`
		width: 18rem;
		height: 4rem;
		padding: 0.8rem;
		font-size: 0.9rem;
		padding: 0.8rem;
	`}
  ${({ theme }) => theme.media.desktop`
		width: 18rem;
		height: 4rem;
		padding: 0.8rem;
		font-size: 0.9rem;
	`}
`;

export const NotificationList = styled.div`
  overflow-y: scroll;
  max-height: 60vh;
  ${({ theme }) => theme.media.tablet`
		max-height: 50vh;
	`}
  ${({ theme }) => theme.media.desktop`
		max-height: 50vh;
	`}
`;

export const NotificationWrap = styled.div`
  display: grid;
  grid-template-columns: auto 1rem;
  column-gap: 0.5rem;
  align-items: start;
  padding: 1.2rem 1rem;
  width: 25rem;
  border-bottom: solid 1.5px #929191;
  ${({ theme }) => theme.media.tablet`
		grid-template-columns: auto 0.8rem;
		column-gap: 0.3rem;
		padding: 0.8rem;
		width: 20rem;
		border-bottom: solid 1px #929191;
	`}
  ${({ theme }) => theme.media.desktop`
		grid-template-columns: auto 0.8rem;
		column-gap: 0.3rem;
		padding: 0.8rem;
		width: 18rem;
		border-bottom: solid 1px #929191;
	`}
`;

export const ContentWrap = styled.div``;

export const NotificationPhrase = styled.div`
  cursor: pointer;
  line-height: 130%;
  color: #000;
  font-size: 1.3rem;

  ${({ theme }) => theme.media.tablet`
		font-size: 0.9rem;
	`}
  ${({ theme }) => theme.media.desktop`
		font-size: 0.9rem;
	`}
`;

export const ContentDetailWrap = styled.div`
  display: flex;
  margin-top: 0.7rem;
  color: #737272;
  font-size: 1.3rem;
  div:nth-child(1) {
    padding-right: 0.8rem;
  }
  div:last-child {
    color: #518edb;
    font-weight: 500;
    border-left: solid 1.5px #929191;
    padding-left: 0.8rem;
  }
  ${({ theme }) => theme.media.tablet`
	font-size: 0.9rem;
	margin-top: 0.5rem;
	div:nth-child(1) {
    padding-right: 0.5rem;
  }
	div:last-child {
		padding-left: 0.5rem;
	}
`}
  ${({ theme }) => theme.media.desktop`
	font-size: 0.9rem;
	margin-top: 0.5rem;
	div:nth-child(1) {
    padding-right: 0.5rem;
  }
	div:last-child {
		padding-left: 0.5rem;
	}
`}
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  width: 1.3rem;
  height: 1.3rem;
  :hover {
    background: #d5d5d5;
  }
  ${({ theme }) => theme.media.tablet`
		width: 1rem;
		height: 1rem;
		font-size: 0.8rem;
	`}
  ${({ theme }) => theme.media.desktop`
		width: 1rem;
		height: 1rem;
		font-size: 0.8rem;
	`}
`;
