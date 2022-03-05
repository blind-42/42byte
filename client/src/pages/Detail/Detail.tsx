import { useState, useEffect, useRef } from 'react';
import { useQuery, useQueryClient, useMutation, useQueries } from 'react-query';
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
import { PostData, CommentData } from 'utils/functions/type';
import { makeCommentUserList } from 'utils/functions/functions';
import { GrLike } from "react-icons/gr";
import { AppContainer, PageContainer, TopBar, PageName, Squares, ContentFooterWrap, NoticeMark } from 'styles/styled';
import { PostContainer, DetailContainer, Title, Specific, Info, Modify, ContentWrap, LikeWrap, LikesBox
	, CommentContainer, CommentCount, CommentListWrap, FLine } from './styled';


function Detail() {
	const [detailData, setDetailData] = useState<PostData>({ boardId: 0, boardName: '', commentCnt: 0, content: '', createdDate: '',
		id: 0, isLiked: false, isNotice: false, isUsers: false, likeCnt: 0, modifiedDate: '', title: '', type: '', viewCnt: 0 });
	const { boardId, boardName, commentCnt, content, createdDate, id, isLiked, isNotice, isUsers, likeCnt, modifiedDate, title, type, viewCnt } = detailData;
	const [commentData, setCommentData] = useState([]);
  const [commentsUserList, setCommentsUserList] = useState([-1]);
	const [boxState, setBoxState] = useState(isLiked);
  const [openEditor, setOpenEditor] = useState(false);
	const currentUrl = window.location.href;
	const boardUrl = currentUrl.split('&postId=')[0].split('boardId=')[1];
	const postUrl = currentUrl.split('&postId=')[1];
	const shortDate = createdDate?.slice(0, 16).replace('T', ' ');
  const scrollRef = useRef<HTMLDivElement>(null);
	
	const queryClient = useQueryClient();
	const mutationPost = useMutation(
		({ path, data }: { path: string; data?: object }) => instance.post(path, data));
	const mutationDelete = useMutation(
		({ path }: { path: string; }) => instance.delete(path));
	const mutationPatch = useMutation(
		({ path }: { path: string; }) => instance.patch(path));
	const results = useQueries([
		{
			queryKey: ['detail_key', boardUrl, postUrl, boxState],
			queryFn: () => {
				instance
				.get(`/post?boardId=${boardUrl}&postId=${postUrl}`)
				.then((res) => {
					setDetailData(res.data);
				})},
			retry: 0, 
			refetchOnWindowFocus: false,
			keepPreviousData: true
		},
		{
			queryKey: ['comment_key', postUrl],
			queryFn: () => {
				instance
				.get(`/comment?boardId=${boardUrl}&postId=${postUrl}`)
				.then((res) => {
					setCommentData(res.data);
					setCommentsUserList(makeCommentUserList(res.data))
				})},
			retry: 0, 
			refetchOnWindowFocus: false,
			keepPreviousData: true
		}
	]);
	const error = results.some(result => result.error);

	const uploadCmtHandler = (comment: string) => {
		if (comment) {
			mutationPost.mutate({ path: `/comment?boardId=${boardId}&postId=${postUrl}`, data: { content: comment } }, {
				onSuccess: () => {
					queryClient.invalidateQueries(['comment_key']);
					setTimeout(() => scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }), 550);},
				onError: () => { window.location.href = '/error'; }
			});
		}
	}

	const deletePostHandler = () => {
		mutationDelete.mutate({ path: `/post?postId=${id}` }, {
			onSuccess: () => { 
				window.location.href = `/board?boardId=${boardId}&page=1`;},
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
					window.location.href = `/board?boardId=${boardId}&page=1`;},
				onError: () => { window.location.href = '/error'; }
			});
		}
	}

	const noticeHandler = () => {
		mutationPatch.mutate({path: `/post?postId=${id}`}, {
			onSuccess: () => {
				isNotice ? alert('공지가 해제되었습니다.') : alert('공지가 성공적으로 등록되었습니다.');
				queryClient.invalidateQueries(['detail_key']); 
			},
			onError: () => { window.location.href = '/error'; }
		});
	}

	const likeBoxHandler = () => {
		mutationPost.mutate({path: `/post/like?postId=${postUrl}`, data: undefined}, {
			onSuccess: () => {
				setBoxState(!boxState);
			},
			onError: () => { window.location.href = '/error'; } 
		});
	}

	if (error) return <Error />

	return (
		<>
			<AppContainer>
				<Header />
				<PageContainer>
					<TopBar>
						<PageName>
							<Link to={`/board?=boardId=${boardId}`}>
								<div>{boardName}</div>
							</Link>
							<div>&nbsp;&#10095; #{id}</div>
						</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to={`/board?=boardId=${boardId}`}>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<ContentFooterWrap>
						<PostContainer>
						{openEditor
						?	<PostEditor detailData={detailData} boardId={boardId}/>
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
									<DropdownMenu isPost={true} isUsers={isUsers} isNotice={isNotice} roleType={type} modifyHandler={modifyPostHandler}
										deleteHandler={deletePostHandler} reportHandler={reportHandler} noticeHandler={noticeHandler} />
								</Specific>
								{content &&
								<ContentWrap>
									<Viewer initialValue={content}/>
								</ContentWrap>}
								<LikeWrap>
									<LikesBox boxState={isLiked} onClick={likeBoxHandler}>
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