import styled from 'styled-components';

export const CommentInputWrap = styled.form`
  display: grid;
  grid-template-rows: 2f 1f;
  margin: 5px 0;
  border-top: solid 2px #000;
  border-left: solid 2px #000;
  border-right: solid 2px #fff;
  border-bottom: solid 2px #fff;
  padding: 0.3rem;
  background: #fff;
  font-size: 1.2rem;
  textarea {
    margin-bottom: 0.2rem;
    resize: none;
    border: none;
    height: 4rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    span {
      text-align: start;
      font-size: 1rem;
      color: #929191;
      padding: 3px;
    }
    input {
      cursor: pointer;
      background: #518edb;
      border-top: solid 2px #fff;
      border-left: solid 2px #fff;
      border-right: solid 2px #000;
      border-bottom: solid 2px #000;
      width: 4.3rem;
      height: 2.3rem;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      color: #fff;
    }
  }
  ${({ theme }) => theme.media.tablet`
		textarea {
			font-size: 0.9rem;
		}
		div {
			font-size: 1rem;
			span {
				font-size: 0.8rem;
			}
			input {
				width: 3.5rem;
				height: 1.8rem;
				font-size: 0.9rem;
			}
		}
	`}
  ${({ theme }) => theme.media.desktop`
		textarea {
			font-size: 0.9rem;
		}
		div {
			font-size: 1rem;
			span {
				font-size: 0.8rem;
			}
			input {
				width: 3.5rem;
				height: 1.8rem;
				font-size: 0.9rem;
			}
		}
	`}
`;
