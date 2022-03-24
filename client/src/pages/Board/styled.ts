import styled from 'styled-components';

export const UtilPostWrap = styled.div`
  display: grid;
`;

export const UtilWrap = styled.div`
  background: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 3px 3px 0 0;
  ${({ theme }) => theme.media.tablet`
		margin: 3px 3px 6px 0;
	`}
  ${({ theme }) => theme.media.desktop`
			margin: 3px 3px 6px 0;
	`}
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 2px #000;
  border-left: solid 2px #000;
  border-right: solid 2px #fff;
  border-bottom: solid 2px #fff;
  height: 2.3rem;
  margin: 0 3px;
  background: #fff;
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    input {
      font-size: 1.1rem;
      line-height: 1.1rem;
      width: 15rem;
      display: flex;
      margin: 2px;
      padding: 0 0 0 0.3rem;
      border: none;
    }
    button {
      cursor: pointer;
      margin-right: -2px;
      background: #518edb;
      border-top: solid 2px #fff;
      border-left: solid 2px #fff;
      border-right: solid 2px #000;
      border-bottom: solid 2px #000;
      color: #fff;
      height: 2.3rem;
      width: 2.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        font-size: 1.2rem;
      }
    }
  }
  ${({ theme }) => theme.media.tablet`
		height: 1.6rem;
		form {
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
		}
	`}
  ${({ theme }) => theme.media.desktop`
		height: 1.6rem;
		form {
			input {
				font-size: 0.8rem;
				width: 12rem;
			}
			button {
				height: 1.6rem;
				width: 1.6rem;
				div {
					font-size: 0.8rem;
				}
			}
		}
	`}
`;

export const WritingButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    cursor: pointer;
    background: #518edb;
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
  ${({ theme }) => theme.media.tablet`
		input {
			font-size: 0.9rem;
			font-weight: 700;
			height: 1.6rem;
			width: 5rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		input {
			font-size: 0.9rem;
			font-weight: 700;
			height: 1.6rem;
			width: 5rem;
		}
	`}
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: solid 1px #fff;
  background: #d5d5d5;
`;

export const PostWrap = styled.div`
  border-bottom: solid 2px #fff;
`;

export const NoPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  line-height: 150%;
  height: 30rem;
  font-size: 1.3rem;
  img {
    display: block;
    margin: 0 auto;
    height: 8rem;
    width: 8rem;
  }
  ${({ theme }) => theme.media.tablet`
		height: 20rem;
		font-size: 0.9rem;
		img {
			height: 5rem;
			width: 5rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		height: 20rem;
		font-size: 0.9rem;
		img {
			height: 5rem;
			width: 5rem;
		}
	`}
`;
