import { useState, useEffect, useRef } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { Viewer } from '@toast-ui/react-editor';
import instance from 'utils/functions/axios';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import CommentInput from 'components/CommentInput/CommentInput';
import Comments from 'components/Comments/Comments';
import PostEditor from 'components/PostEdit/PostEditor';
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import { UserData, DetailData, PostData, CommentData } from 'utils/functions/type';
import { isDelOption } from 'utils/functions/functions';
import { GrLike } from "react-icons/gr";
import { AppContainer, PageContainer, TopBar, PageName, Squares, ContentFooterWrap, NoticeMark } from 'styles/styled';
import { PostContainer, DetailContainer, Title, Specific, Info, Modify, ContentWrap, LikeWrap, LikesBox
				, CommentContainer, CommentCount, CommentListWrap, FLine } from './styled';
import { stringify } from 'querystring';


function Detail() {
	const [detailData, setDetailData] = useState<DetailData>({
		post: { id: 0, title: "", content: "", commentCnt: 0, viewCnt: 0, likeCnt: 0, isUsers: false, isNotice: false, isLiked: false, blameCnt: 0, createdDate : "", modifiedDate: "" }, 
		comment: [{ boardId: 0, postId: 0, id: 0, authorId: 0, content: "", likeCnt: 0, blameCnt: 0, isUsers: false, isAuthor: false, isLiked: false, isDel: 0, createdDate: "", modifiedDate: "", recomments: [] }]
	});
	const { id, title, content, commentCnt, viewCnt, likeCnt, isUsers, isNotice, isLiked, blameCnt, createdDate, modifiedDate } = detailData.post
	const [userData, setUserData] = useState<UserData>({createdDate: '', modifiedDate: '', hashId: '', profileImageUrl: '', roleType: ''});
	const { hashId, roleType } = userData;
	const [commentData, setCommentData] = useState([]);
  const [commentsUserList, setCommentsUserList] = useState([-1]);
	const [likeState, setLikeState] = useState<boolean>(false);
  const [openEditor, setOpenEditor] = useState(false);
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('detail?boardId=1&postId=')[1];
	const shortDate = createdDate?.slice(0, 16).replace('T', ' ');
  const scrollRef = useRef<any>(null);
	
	const queryClient = useQueryClient();
	const mutationPost = useMutation(
		({ path, data }: { path: string; data?: object }) => instance.post(path, data));
	const mutationDelete = useMutation(
		({ path }: { path: string; }) => instance.delete(path));
	const mutationPatch = useMutation(
		({ path }: { path: string; }) => instance.patch(path));
	const { isFetching, isLoading, error, data } = useQuery(['detail_key', urlId], () => {
		instance
		.get(`/post?boardId=1&postId=${urlId}`)
		.then((res) => {
			console.log(res.data)
			setDetailData(res.data);
			setCommentData(res.data.comment);
			setLikeState(res.data.post.isLiked);
			setCommentsUserList(Array.from(new Set(res.data.comment.filter((el:CommentData) => (!el.isAuthor)).map((el:CommentData) => (el.authorId)))));
		})},
		{ retry: 0, 
			refetchOnWindowFocus: false,
			keepPreviousData: true,
		}
	)

	useEffect(() => {
		instance
		.get('/user')
		.then((res) => setUserData(res.data))
		.catch((err) => console.log(err))
	}, [])
	
	const uploadCmtHandler = (comment: string) => {
		if (comment) {
			mutationPost.mutate({ path: `/comment?boardId=1&postId=${urlId}`, data: { content: comment } }, {
				onSuccess: (data) => {
					queryClient.invalidateQueries(['detail_key']);
					setTimeout(() => scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }), 550);},
				onError: () => { window.location.href = '/error'; }
			});
		}
	}

	const deletePostHandler = () => {
		mutationDelete.mutate({ path: `/post?postId=${id}` }, {
			onSuccess: () => { 
				window.location.href = '/blindboard?page=1';},
			onError: () => { window.location.href = '/error'; }
		});
	}

	const modifyPostHandler = () => {
    setOpenEditor(true);
	}

	const reportHandler = (reportIssue: string) => {
		if (reportIssue) {
			mutationPost.mutate({ path: `/post/blame?postId=${id}`, data: { issue: reportIssue } }, {
				onSuccess: () => { 
					alert('신고가 정상적으로 처리되었습니다.');
					window.location.href='/blindboard?page=1';},
				onError: () => { window.location.href = '/error'; }
			});
		}
	}

	const noticeHandler = () => {
		mutationPatch.mutate({path: `/post?postId=${id}`}, {
			onSuccess: () => {
				isNotice ? alert('공지가 해제되었습니다.') : alert('공지가 성공적으로 등록되었습니다.');
				queryClient.invalidateQueries(['detail_key']); },
			onError: () => { window.location.href = '/error'; }
		});
	}

	const likeBoxHandler = () => {
		mutationPost.mutate({path: `/post/like?postId=${urlId}`, data: undefined}, {
			onSuccess: (data) => {
				queryClient.invalidateQueries(['detail_key']);
				setLikeState(!likeState);},
			onError: () => { window.location.href = '/error'; } 
		});
	}

	if (isFetching || isLoading) return <Loading />

	if (error) return <Error />

	return (
		<>
			<AppContainer>
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
						{openEditor
						?	<PostEditor detailData={detailData}/>
						:	<DetailContainer>
								<Title>
									{isNotice && 
									<NoticeMark>공지</NoticeMark>}
									<div>{title}</div>
								</Title>
								<Specific>
									<Info>
										<div>카뎃</div>
										<div>{shortDate} {(createdDate !== modifiedDate) && '수정됨'}</div>
										<div>조회 {Number(viewCnt) + 1}</div>
									</Info>
									<DropdownMenu isPost={true} isUsers={isUsers} isNotice={isNotice} roleType={roleType} modifyHandler={modifyPostHandler}
										deleteHandler={deletePostHandler} reportHandler={reportHandler} noticeHandler={noticeHandler} />
								</Specific>
								{content &&
								<ContentWrap>
									<Viewer initialValue={content}/>
								</ContentWrap>}
								<LikeWrap>
									<LikesBox boxState={likeState} onClick={likeBoxHandler}>
										<div><GrLike /></div>
										<div>{likeCnt}</div>
									</LikesBox>
								</LikeWrap>
								<CommentContainer>
									<CommentCount>댓글 {commentCnt}</CommentCount>
									<CommentInput submitCmtHandler={uploadCmtHandler} placeholder={'댓글을 입력하세요.'} />
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