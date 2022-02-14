// import { useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import instance from 'utils/functions/axios';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Comments from 'components/Comments/Comments';
import { DetailData, PostData, CommentData } from 'utils/functions/type';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from 'styles/styled';
import { PostContainer, DetailContainer, Title, Specific, Info, Modify, ContentWrap, LikeWrap, LikesBox
				, CommentContainer, CommentCount, CommentInput, CommentListWrap } from './styled';

function Detail() {

	const [detailData, setDetailData] = useState<DetailData>({post: {}, comment: [{}]});
	const [boxState, setBoxState] = useState<boolean>(false);
	const [msg, setMsg] = useState<string>('');

	useEffect(() => {
		instance
		.get('/post?boardId=1&postId=2')
		.then((res) => { setDetailData(res.data) })
		.catch((err) => console.log(err));
	},[])

	const postData: PostData= detailData.post;
	const commentData: CommentData[]= detailData.comment;
	console.log(detailData.comment);

	const boxcolorHandler = () => {
		console.log(boxState);
		setBoxState(!boxState);
	}

	const msgHandler = (e: any) => {
		setMsg(e.target.value);
	}

	return (
		<>
		<AppContainer>
					<Header />
					<PageContainer>
						<TopBar>
							<PageName>상세글 #{postData.id}</PageName>
							<Squares>
								<div>&#9866;</div>
								<div>&#10064;</div>
								<Link to='/'>
									<div>&times;</div>
								</Link>
							</Squares>
						</TopBar>
					{/* 만약 컴포넌트로 한다면 여기서부터 넣으면 됨! */}
					<PostContainer>
						<DetailContainer>
							<Title>{postData.title}</Title>
							<Specific>
								<Info>
									<div>카뎃</div>
									<div>{postData.createdDate?.slice(0.10)}</div>
									<div>조회 {postData.viewCnt}</div>
								</Info>
								<Modify>
									<div>수정</div>
									<div>삭제</div>
								</Modify>
							</Specific>
							<ContentWrap>
								{postData.content}
							</ContentWrap>
							<LikeWrap>
								<LikesBox boxState={boxState} onClick={boxcolorHandler}>
									<div>&#128077;</div>
									<div>{postData.likeCnt}</div>
								</LikesBox>
							</LikeWrap>
							<CommentContainer>
								<CommentCount>댓글 {commentData.length}</CommentCount>
								<CommentInput>
									<textarea placeholder='댓글을 입력하세요.' onChange={msgHandler}></textarea> 
									<button>등록</button>
								</CommentInput>
								<CommentListWrap>
									{commentData.map((el: CommentData, idx) => {
										return (<Comments key={idx} comment={el}/>)
									})}
								</CommentListWrap>
							</CommentContainer>
						</DetailContainer>
					</PostContainer>
					{/* <PageNation pageData={pageData}/> */}
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

// function Detail() {
// 	const [boxState, setBoxState] = useState<boolean>(false);
// 	const [msg, setMsg] = useState<string>('');
// 	const location = useLocation();
// 	const propsDB: any = location.state
// 	const { createdDate, modifiedDate, id, authorId, title, content, commentCnt, viewCnt, likeCnt, isNotice, blameCnt } = propsDB.content
// 	const boxcolorHandler = () => {
// 		console.log(boxState);
// 		setBoxState(!boxState);
// 	}

	// const msgHandler = (e: any) => {
	// 	setMsg(e.target.value);
	// }
//   return (
// 		<AppContainer>
// 			<Header />
// 			<MainContainer>
// 				<DetailWrap>
// 					<Title>
// 						<div>{title}</div>
// 					</Title>
// 					<Info>
// 						<div className='left'>
// 							<div>{authorId}</div>
// 							<div>{createdDate.slice(0.10)}</div>
// 							<div>조회 {viewCnt}</div>
// 						</div>
// 						<div className='right'>
// 							<div>수정</div>
// 							<div>삭제</div>
// 						</div>
// 					</Info>
// 					<ContentWrap>
// 						<div>{content}</div>
// 					</ContentWrap>
// 					<LikesWrap>
// 						<LikesBox boxState={boxState} onClick={boxcolorHandler}>
// 							<div className='likesIcon'>&#128077;</div>
// 							<div className='likesCount'>{likeCnt}</div>
// 						</LikesBox>
// 					</LikesWrap>
// 				</DetailWrap>
				// <CommentContainer>
				// 	<div className='commentCount'>댓글 {commentCnt}</div>
				// 	<CommentInput>
				// 		<textarea placeholder='댓글을 입력하세요.' onChange={msgHandler}></textarea> 
				// 		<button>등록</button>
				// 	</CommentInput>
				// 	<CommentList>
				// 		{/* 목업 */}
				// 		<Comments />
				// 		<Comments />
				// 		<Comments />
				// 	</CommentList>
				// </CommentContainer>
// 			</MainContainer>
// 			<Footer />
// 		</AppContainer>
// 	);
// }

export default Detail;