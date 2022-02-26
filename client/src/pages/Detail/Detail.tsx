import { useState, useEffect, useRef } from 'react';
import { useQuery,  useQueryClient, useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import instance from 'utils/functions/axios';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Comments from 'components/Comments/Comments';
import DeleteModal from 'components/Modal/DeleteModal';
import PostEditor from 'components/PostEdit/PostEditor';
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import { DetailData, PostData, CommentData } from 'utils/functions/type';
import { GrLike } from "react-icons/gr";
import { AppContainer, PageContainer, TopBar, PageName, Squares, ContentFooterWrap } from 'styles/styled';
import { PostContainer, DetailContainer, Title, Specific, Info, Modify, ContentWrap, LikeWrap, LikesBox
				, CommentContainer, CommentCount, CommentInput, CommentListWrap, FLine } from './styled';

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
			isLiked: false,
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
			isLiked: false,
			isDel: false,
			createdDate: "",
			modifiedDate: "",
		}]
	});
	const { id, title, content, commentCnt, viewCnt, likeCnt, isUsers, isNotice, isLiked, blameCnt, createdDate, modifiedDate } = detailData.post
	const [boxState, setBoxState] = useState<boolean>(false);
	const [comment, setComment] = useState<string>('');
	const [openPostDelModal, setOpenPostDelModal] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState(false)
  const [reRender, setReRender] = useState(false)
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('detail?boardId=1&postId=')[1];
  const scrollRef = useRef<any>(null)

	
	const mutationPost = useMutation(
		({ path, data }: { path: string; data?: object }) => instance.post(path, data));
	const mutationDelete = useMutation(
		({ path }: { path: string; }) => instance.delete(path));
	const { isFetching, isLoading, error, data } = useQuery(['detail_key', urlId, boxState, reRender], 
		() => {
			instance
			.get(`/post?boardId=1&postId=${urlId}`)
			.then((res) => {
				console.log('use')
				setDetailData(res.data);
				setCommentData(res.data.comment);
				setBoxState(res.data.post.isLiked);
				setCommentsUserList(Array.from(new Set(res.data.comment.filter((el:CommentData) => !el.isAuthor).map((el:CommentData) => el.authorId))))})},
				{ retry: 0, 
					refetchOnWindowFocus: false,
					keepPreviousData: true,
				});
	
	const [commentData, setCommentData] = useState([]);
	const shortDate = createdDate?.slice(0, 16).replace('T', ' ');
  const [commentsUserList, setCommentsUserList] = useState([-1])


	const boxcolorHandler = () => {
		mutationPost.mutate({path: `/post/like?postId=${urlId}`, data: undefined}, 
		{ onSuccess: (data) => {setBoxState(!boxState);},
			onError: (data) => {window.location.href = '/error';} 
		});
	}

	const sendCmmtHandler = () => {
		mutationPost.mutate({path: `/comment?boardId=1&postId=${urlId}`, data: {content: comment}},
		{ onSuccess: (data) => {
				setComment('');
				setReRender(!reRender);
				setTimeout(() => scrollRef.current.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}), 550);},
			onError: (data) => {window.location.href = '/error';}
		});
	}

	const deletePostHandler = () => {
		mutationDelete.mutate({path: `/post?postId=${id}`},
		{ onSuccess: (data) => {
				window.location.href = '/blindboard?page=1';},
			onError: (data) => {window.location.href = '/error';}
		});
	}

	const inputCmmtHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
  }
	const clickPostDelModalHandler = () => {
		setOpenPostDelModal(!openPostDelModal);
	}

	const modifiedHandler = () => {
    setIsEdit(true);
	}

	if (isFetching || isLoading) return <Loading />

	if (error) return <Error />

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
								<div>자유 게시판</div>
							</Link>
							<div>&nbsp;&#10095; #{id}</div>
						</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to='/blindboard'>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<ContentFooterWrap>
						<PostContainer>
						{isEdit ?
							<PostEditor detailData={detailData}/> :
							<DetailContainer>
								<Title>{title}</Title>
									<Specific>
										<Info>
											<div>카뎃</div>
											<div>{shortDate} {(createdDate !== modifiedDate) && '수정됨'}</div>
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
										<div><GrLike /></div>
										<div>{likeCnt}</div>
									</LikesBox>
								</LikeWrap>
								<CommentContainer>
									<CommentCount>댓글 {commentCnt}</CommentCount>
									<CommentInput>
										<textarea placeholder='댓글을 입력하세요.' onChange={inputCmmtHandler} maxLength={300} value={comment} />
										<div>
											<span>{comment.length} / 300</span>
											<input type='button' value='등록' onClick={sendCmmtHandler}/>
										</div>
									</CommentInput>
									<FLine />
									<CommentListWrap>
										{commentData.map((el: CommentData) => {
											return (<Comments key={el.id} comment={el}
																										// setReRender={setReRender}
																										commentsUserList={commentsUserList} />)
										})}
									</CommentListWrap>
								</CommentContainer>
							</DetailContainer>}
              <div ref={scrollRef}/>
						</PostContainer>
						<Footer />
					</ContentFooterWrap>
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Detail;