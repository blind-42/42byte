import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import instance from 'utils/functions/axios';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Comments from 'components/Comments/Comments';
import DeleteModal from 'components/Modal/DeleteModal';
import { DetailData, PostData, CommentData } from 'utils/functions/type';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from 'styles/styled';
import { PostContainer, DetailContainer, Title, Specific, Info, Modify, ContentWrap, LikeWrap, LikesBox
				, CommentContainer, CommentCount, CommentInput, CommentListWrap } from './styled';

function Detail() {
	const [detailData, setDetailData] = useState<DetailData>(
		{post: {
			createdDate : "",
			modifiedDate: "",
			id: 0,
			authorId: 0,
			title: "",
			content: "",
			commentCnt: 0,
			viewCnt: 0,
			likeCnt: 0,
			isNotice: false,
			blameCnt: 0
		}, 
		comment: [{     
		createdDate: "",
		modifiedDate: "",
		id: 0,
		authorId: 0,
		content: "",
		likeCnt: 0,
		blameCnt: 0,
		isAuthor: false,
		isDel: false
		}]
}
);
	const [boxState, setBoxState] = useState<boolean>(false);
	const [comment, setComment] = useState<string>('');
	const [clickModal, setClickModal] = useState<boolean>(false);
	
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
	const commentsUserList = Array.from(new Set(commentData.map((el:CommentData) => el.authorId))).filter(el => el !== authorId)

	const inputMsgHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
	}

	const clickModalHandler = () => {
		setClickModal(!clickModal);
	}

	const boxcolorHandler = () => {
		instance
		.post(`/post/like?postId=${urlId}`)
		.then(() => setBoxState(!boxState))
		.catch((err) => console.log(err));
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
		instance
		.delete(`/post?postId=${id}`)
		.then(() => {window.location.href = '/blindboard?page=1'})
		.catch((err) => console.log(err));
	}

	return (
		<>
		<AppContainer>
			{clickModal && (
        <DeleteModal clickModalHandler={clickModalHandler} deleteHandler={deleteHandler}/>
      )}
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
										<div onClick={clickModalHandler}>삭제</div>
									</Modify>
								</Specific>
							{content && <ContentWrap>
								<Viewer initialValue={content}/>
							</ContentWrap>}
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
										return (<Comments key={idx} comment={el} commentsUserList={commentsUserList}/>)
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