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
				, CommentContainer, CommentCount, CommentInput, CommentListWrap, FLine } from './styled';
import PostEditor from 'components/PostEdit/PostEditor';

function Detail() {
	const [detailData, setDetailData] = useState<DetailData>(
		{post: {
			id: 0,
			title: "",
			content: "",
			commentCnt: 0,
			viewCnt: 0,
			likeCnt: 0,
			isUsers: false,
			isNotice: false,
			blameCnt: 0,
			createdDate : "",
			modifiedDate: ""
		}, 
		comment: [{
			boardId: 0,
			postId: 0,  
			id: 0,
			authorId: 0,
			content: "",
			likeCnt: 0,
			blameCnt: 0,
			isUsers: false,
			isAuthor: false,
			isDel: false,
			createdDate: "",
			modifiedDate: "",
		}]
	});
	const [boxState, setBoxState] = useState<boolean>(false);
	const [comment, setComment] = useState<string>('');
	const [openPostDelModal, setOpenPostDelModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false)
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
	
	const { id, title, content, commentCnt, viewCnt, likeCnt, isUsers, isNotice, blameCnt, createdDate, modifiedDate } = detailData.post
	const commentData: CommentData[]= detailData.comment;
	const shortDate = createdDate?.slice(0, 16).replace('T', ' ');
	const commentsUserList = Array.from(new Set(commentData.filter((el:CommentData) => !el.isAuthor).map((el:CommentData) => el.authorId)));

	const inputCmmtHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
	}

	const clickPostDelModalHandler = () => {
		setOpenPostDelModal(!openPostDelModal);
	}

	const boxcolorHandler = () => {
		instance
		.post(`/post/like?postId=${urlId}`)
		.then(() => setBoxState(!boxState))
		.catch((err) => console.log(err));
	}

	const sendCmmtHandler = () => {
		instance
		.post(`/comment?boardId=1&postId=${urlId}`, {content: comment})
		.then(() => {
			setComment('');
			window.location.reload();
		})
		.catch((err) => console.log(err));
	}

	const modifiedHandler = () => {
    setIsEdit(true)
	}

	const deletePostHandler = () => {
		instance
		.delete(`/post?postId=${id}`)
		.then(() => {window.location.href = '/blindboard?page=1'})
		.catch((err) => console.log(err));
	}

  const uploadHandler = () => {
		instance
		.post('/post?boardId=1', { title: title, content: content })
		.then((res) => {window.location.href=`/detail?boardId=1&postId=${res.data.id}`})
		.catch((err) => console.log(err));
	}



	return (
		<>
			<AppContainer>
				{openPostDelModal && (
					<DeleteModal clickModalHandler={clickPostDelModalHandler} 
						deleteHandler={deletePostHandler}/>)}
				<Header />
				<PageContainer>
					<TopBar>
						<PageName>
							<Link to='/blindboard'>
								<div>블라인드 게시판 </div>
							</Link>
							<div> &#10095; {title}</div>
						</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to='/blindboard'>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<PostContainer>
					{isEdit ?
            <PostEditor detailData={detailData}/> :
            <DetailContainer>
							<Title>{title}</Title>
								<Specific>
									<Info>
										<div>카뎃</div>
										<div>{shortDate} 수정됨</div>
										<div>조회 {Number(viewCnt) + 1}</div>
									</Info>
									{isUsers &&
                    <Modify>
                      <div onClick={modifiedHandler}>수정</div>
                      <div onClick={clickPostDelModalHandler}>삭제</div>
                    </Modify>}
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
								<CommentCount>댓글 {commentCnt}</CommentCount>
								<CommentInput>
									<textarea placeholder='댓글을 입력하세요.' onChange={inputCmmtHandler} maxLength={300}></textarea>
									<div>
										<span>{comment.length} / 300</span>
										<input type='button' value='등록' onClick={sendCmmtHandler}/>
									</div>
								</CommentInput>
								<FLine />
								<CommentListWrap>
									{commentData.map((el: CommentData, idx) => {
										return (<Comments key={idx} comment={el}
																								commentsUserList={commentsUserList} />)
									})}
								</CommentListWrap>
							</CommentContainer>
						</DetailContainer>}
					</PostContainer>
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Detail;