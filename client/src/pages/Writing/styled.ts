import styled from 'styled-components';

export const ContentWrap = styled.div``;

export const SelectBoard = styled.div`
  position: relative;
  height: 3rem;
  width: 20rem;
  margin: 6px 0 3px 0;
  background: #dedede;
  div {
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 35px;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  select::-ms-expand {
    display: none;
  }
  select {
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-top: solid 2px #000;
    border-left: solid 2px #000;
    border-right: solid 2px #fff;
    border-bottom: solid 2px #fff;
    background: transparent;
    padding: 0 1rem;
    height: inherit;
    width: inherit;
    font-size: 1.2rem;
    position: relative;
    z-index: 3;
  }
  select:hover {
    border: solid 2px #518edb;
  }
  ${({ theme }) => theme.media.tablet`
		height: 2rem;
		width: 30rem;
		div {
			font-size: 1.2rem;
		}
		select {
			font-size: 0.9rem;
		}
	`}
  ${({ theme }) => theme.media.desktop`
		height: 2rem;
		width: 30rem;
		div {
			font-size: 1.2rem;
		}
		select {
			font-size: 0.9rem;
		}
	`}
`;
