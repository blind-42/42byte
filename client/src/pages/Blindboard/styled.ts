import styled from 'styled-components';

export const PostContainer = styled.div`
	overflow-y: scroll;
	// &::-webkit-scrollbar {
  //   width: 8px;
  // }
  // &::-webkit-scrollbar-thumb {
  //   cursor: pointer;
  //   border-radius: 3.5px;
  //   background-color: RGB(190, 190, 190);

  //   &:hover {
  //     background-color: RGB(173, 173, 173);
  //   }
  // }
	background: #C4C4C4;
	border-top: solid 2px #000;
	border-left: solid 2px #000;
	border-right: solid 2px #fff;
	border-bottom: solid 2px #fff;
	padding: 3px;
	// height: 85vh;
`;

export const ContentWrap = styled.div`
	border-top: solid 1px #fff;
	background: #D5D5D5;
`;

export const PostWrap = styled.div`
	border-bottom: solid 2px #fff;
`;
