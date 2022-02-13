// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ContentData } from 'pages/Blindboard/Blindboard';
// import Header from 'components/Header/Header';
// import Footer from 'components/Footer/Footer';
// import Comments from 'components/Comments/Comments';
// import { AppContainer, MainContainer, DetailWrap, Title, Info, ContentWrap, 
// 				LikesWrap, LikesBox, CommentContainer, CommentInput, CommentList } from './styled'
type GreetingProps = {
	state: number;
}

function Detail() {
	// const [boxState, setBoxState] = useState<boolean>(false);
	// const [msg, setMsg] = useState<string>('');
	// const location = useLocation();
	// const propsDB: any = location.state
	// const { createdDate, modifiedDate, id, authorId, title, content, commentCnt, viewCnt, likeCnt, isNotice, blameCnt } = propsDB.content
	// const boxcolorHandler = () => {
	// 	console.log(boxState);
	// 	setBoxState(!boxState);
	// }

	// const msgHandler = (e: any) => {
	// 	setMsg(e.target.value);
	// }
console.log('1');
  return (
		<>
		</>
		// <AppContainer>
		// 	<Header />
		// 	<MainContainer>
		// 		<DetailWrap>
		// 			<Title>
		// 				<div>{title}</div>
		// 			</Title>
		// 			<Info>
		// 				<div className='left'>
		// 					<div>{authorId}</div>
		// 					<div>{createdDate.slice(0.10)}</div>
		// 					<div>조회 {viewCnt}</div>
		// 				</div>
		// 				<div className='right'>
		// 					<div>수정</div>
		// 					<div>삭제</div>
		// 				</div>
		// 			</Info>
		// 			<ContentWrap>
		// 				<div>{content}</div>
		// 			</ContentWrap>
		// 			<LikesWrap>
		// 				<LikesBox boxState={boxState} onClick={boxcolorHandler}>
		// 					<div className='likesIcon'>&#128077;</div>
		// 					<div className='likesCount'>{likeCnt}</div>
		// 				</LikesBox>
		// 			</LikesWrap>
		// 		</DetailWrap>
		// 		<CommentContainer>
		// 			<div className='commentCount'>댓글 {commentCnt}</div>
		// 			<CommentInput>
		// 				<textarea placeholder='댓글을 입력하세요.' onChange={msgHandler}></textarea> 
		// 				<button>등록</button>
		// 			</CommentInput>
		// 			<CommentList>
		// 				{/* 목업 */}
		// 				<Comments />
		// 				<Comments />
		// 				<Comments />
		// 			</CommentList>
		// 		</CommentContainer>
		// 	</MainContainer>
		// 	<Footer />
		// </AppContainer>
	);
}

export default Detail;