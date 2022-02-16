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

function Detail() {
	const [detailData, setDetailData] = useState<DetailData>({post: {}, comment: [{}]});
	const [boxState, setBoxState] = useState<boolean>(false);
	const [comment, setComment] = useState<string>('');
	
	const history = useNavigate();
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('detail?boardId=1&postId=')[1];

	useEffect(() => {
		instance.get(`/post?boardId=1&postId=${urlId}`)
		.then((res) => {
			setDetailData(res.data);
		})
		.catch((err) => console.log(err));
	},[boxState])

	useEffect(() => {
		instance.get(`/mypage/post/like`)
		.then((res) => {
			setBoxState(res.data.contents.map((el: PostData) => el.id).indexOf(Number(urlId)) !== -1)
		})
		.catch((err) => console.log(err));
	},[])

	const { createdDate, modifiedDate, id, authorId, title, content, commentCnt, viewCnt, likeCnt, isNotice, blameCnt } = detailData.post
	const commentData: CommentData[]= detailData.comment;
	const shortDate = createdDate?.slice(0, 16).replace('T', ' ');

	const boxcolorHandler = () => {
		instance
		.post(`/post/like?postId=${urlId}`)
		.then(() => setBoxState(!boxState))
		.catch((err) => console.log(err));
	}

	const inputMsgHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
	}

	const sendCommentHandler = () => {
		instance
		.post(`/comment?boardId=1&postId=${urlId}`, {content: comment})
		.then(() => {
			setComment('');
			window.location.reload();
		})
		.catch((err) => console.log(err));
	}

	const modifiedHandler = () => {
	}

	const deleteHandler = () => {
	}

	return (
		<>
		<AppContainer>
					<Header />
					<PageContainer>
						<TopBar>
							<PageName>상세글 #{id}</PageName>
							<Squares>
								<div>&#9866;</div>
								<div>&#10064;</div>
								<Link to='/blindboard'>
									<div>&times;</div>
								</Link>
							</Squares>
						</TopBar>
					<PostContainer>
						<DetailContainer>
							<Title>{title}</Title>
							<Specific>
								<Info>
									<div>카뎃</div>
									<div>{shortDate}</div>
									<div>조회 {Number(viewCnt) + 1}</div>
								</Info>
								<Modify>
									<div onClick={modifiedHandler}>수정</div>
									<div onClick={deleteHandler}>삭제</div>
								</Modify>
							</Specific>
							<ContentWrap>
								{content}
							</ContentWrap>
							<LikeWrap>
								<LikesBox boxState={boxState} onClick={boxcolorHandler}>
									<div>&#128077;</div>
									<div>{likeCnt}</div>
								</LikesBox>
							</LikeWrap>
							<CommentContainer>
								<CommentCount>댓글 {commentData.length}</CommentCount>
								<CommentInput>
									<textarea placeholder='댓글을 입력하세요.' onChange={inputMsgHandler} maxLength={300}></textarea>
									<div>
									<span>{comment.length} / 300</span>
									<input type='button' value='등록' onClick={sendCommentHandler}/>
									</div>
								</CommentInput>
								<CommentListWrap>
									{commentData.map((el: CommentData, idx) => {
										return (<Comments key={idx} comment={el}/>)
									})}
								</CommentListWrap>
							</CommentContainer>
						</DetailContainer>
					</PostContainer>
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Detail;