import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import instance from 'utils/functions/axios';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Comments from 'components/Comments/Comments';
import { DetailData, PostData, CommentData } from 'utils/functions/type';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from 'styles/styled';
import { PostContainer, DetailContainer, Title, Specific, Info, Modify, ContentWrap, LikeWrap, LikesBox
				, CommentContainer, CommentCount, CommentInput, CommentListWrap } from './styled';
import axios from 'axios';

function Detail() {
	const mountedRef = useRef(true);
	const [detailData, setDetailData] = useState<DetailData>({post: {}, comment: [{}]});
	const [mylikeIds, setMylikeIds] = useState<number[]>([]);
	const [boxState, setBoxState] = useState<boolean>(false); // false면 안되지...?
	const [msg, setMsg] = useState<string>('');
	
	const history = useNavigate();
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('detail?boardId=1&postId=')[1];

	// useEffect(() => {
	// 	axios
	// 	.all([instance.get(`/post?boardId=1&postId=${urlId}`),
	// 				instance.get(`/mypage/post/like`)])
	// 	.then(axios.spread((res1, res2) => {
	// 		setDetailData(res1.data);
	// 		setMylikeIds(res2.data.contents.map((el: PostData) => el.id));
	// 	}))
	// 	.then(() => setBoxState(boxBoolean))
	// 	.catch((err) => console.log(err));
	// },[boxState, mylikeIds]) // 조회수 무한루프 한번에 핸들링 불가...?

	useEffect(() => {
		instance.get(`/post?boardId=1&postId=${urlId}`)
		.then((res) => {
			setDetailData(res.data);
		})
		.catch((err) => console.log(err));
	},[boxState])

	useEffect(() => {
		instance.get(`/mypage/post/like`)
		.then((res) => setMylikeIds(res.data.contents.map((el: PostData) => el.id)))
		.then(() => setBoxState(() => mylikeIds.indexOf(Number(urlId)) !== -1 ))
		.catch((err) => console.log(err));
		return () => {mountedRef.current = false;};  // clean up function
	},[mylikeIds, boxState])

	const postData: PostData= detailData.post;
	const commentData: CommentData[]= detailData.comment;
	const date = postData.createdDate;
	const shortDate = date?.slice(0, 16).replace('T', ' ');

	const boxcolorHandler = () => {
		instance
		.post(`/post/like?postId=${urlId}`)
		.then(() => setBoxState(!boxState))
		.catch((err) => console.log(err));
	}

	const msgHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
					<PostContainer>
						<DetailContainer>
							<Title>{postData.title}</Title>
							<Specific>
								<Info>
									<div>카뎃</div>
									<div>{shortDate}</div>
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
									<input type='button' value='등록' />
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

export default Detail;