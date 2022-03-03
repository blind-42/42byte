import React from 'react';
import { useState } from 'react';
import { useQuery,  useQueryClient, useMutation } from 'react-query';
import instance from 'utils/functions/axios';
import DropdownMenu from 'components/DropdownMenu/DropdownMenu';
import CommentInput from 'components/CommentInput/CommentInput';
import { RecommentData } from 'utils/functions/type';
import { timeForToday, isDelOption, whoIsWriter } from 'utils/functions/functions';
import { GrLike } from "react-icons/gr";
import { RecommentContainer, ReCommentWrap, ModifyCommentWrap, CommentTop, Info, Modify, Content, 
	CommentBottom, ReCommentBox, LikesBox, GLine, FLine } from './styled'

type GreetingProps = {
	recomment: RecommentData
	commentsUserList: number[]
}

function ReComments({ recomment, commentsUserList }: GreetingProps) {
	const {authorId, blameCnt, content, createdDate, id, isAuthor, isDel, isLiked, isUsers, likeCnt, modifiedDate, postId, targetAuthorId } = recomment;
	const [boxState, setBoxState] = useState<boolean>(isLiked);
	const [openEditor, setOpenEditor] = useState<boolean>(false);
	const [openReReCmt, setOpenReReCmt] = useState<boolean>(false);
	const writer = whoIsWriter(isAuthor, commentsUserList, authorId);

	const queryClient = useQueryClient();
	const mutationPost = useMutation(
		({ path, data }: { path: string; data?: object }) => instance.post(path, data));
	const mutationDelete = useMutation(
		({ path }: { path: string; }) => instance.delete(path));
	const mutationPut = useMutation(
		({ path, data }: { path: string; data?: object }) => instance.put(path, data));

	const modifyCmtHandler = () => { setOpenEditor(!openEditor); }

	const openReReCmtHandler = () => { setOpenReReCmt(!openReReCmt); }

	const updateCmtHandler = (comment: string) => {
		mutationPut.mutate({path: `/comment?commentId=${id}`, data: {content: comment}},
		{ onSuccess: () => {
				queryClient.invalidateQueries(['comment_key']);
				setOpenEditor(!openEditor);},
			onError: () => {window.location.href = '/error';}
		})
	}

	const uploadReReCmtHandler = (comment: string) => {
		mutationPost.mutate({path: `recomment?commentId=${id}`, data: {content: comment}},
		{ onSuccess: () => {
				queryClient.invalidateQueries(['comment_key']);
				setOpenReReCmt(!openReReCmt);},
			onError: () => {window.location.href = '/error';}
		});
	}

	const deleteCmtHandler = () => {
		mutationDelete.mutate({path: `/comment?commentId=${id}`},
		{ onSuccess: () => {
				queryClient.invalidateQueries(['comment_key']);},
			onError: () => {window.location.href = '/error';}
		});
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

	const boxcolorHandler = () => {
		mutationPost.mutate({path: `/comment/like?postId=${postId}&commentId=${id}`, data: undefined},
		{ onSuccess: () => {
				queryClient.invalidateQueries(['comment_key']);
				setBoxState(!boxState);},
			onError: () => {window.location.href = '/error';}
		});
	}

	return (
		<>
			<GLine/>
			<FLine/>
			<RecommentContainer>
				<span>&#8627;</span>
				{openEditor
				? <ReCommentWrap>
					<ModifyCommentWrap>
						<CommentTop>
							<Info isUsers={isUsers}>
								<h3>{writer}</h3>
							</Info>
							<Modify>
								<div onClick={modifyCmtHandler}>취소</div>
							</Modify>
						</CommentTop>
						<Content>
							<CommentInput submitCmtHandler={updateCmtHandler} defaultContent={content} />
						</Content>
					</ModifyCommentWrap>
					</ReCommentWrap> 
				: <ReCommentWrap>
						<CommentTop>
							<Info isUsers={isUsers}>
								<h3>{writer}</h3>
								<div>{timeForToday(createdDate)} {(createdDate !== modifiedDate) && '수정됨'}</div>
							</Info>
							{!isDel && <DropdownMenu isPost={false} isUsers={isUsers} modifyHandler={modifyCmtHandler} 
								deleteHandler={deleteCmtHandler} reportHandler={reportHandler} />}
						</CommentTop>
						<Content>
							{isDel
							? <div className='isDel'>&#9986; {isDelOption(isDel)}에 의해 삭제된 댓글 입니다.</div>
							: blameCnt >= 5
							? <div className='isDel'>&#10754; 신고누적으로 숨김처리된 댓글입니다.</div>
							: <div>
									<span>
										{commentsUserList.indexOf(authorId) < 0
										? '@작성자 ' : `@카뎃${commentsUserList.indexOf(authorId) + 1} `}
									</span>
									{content}
								</div>}
						</Content>
						<CommentBottom>
							<ReCommentBox openReCmt={openReReCmt} onClick={openReReCmtHandler}>
								답글
							</ReCommentBox>
							<LikesBox boxState={boxState} onClick={boxcolorHandler}>
								<div><GrLike /></div>
								<div>{likeCnt}</div>
							</LikesBox>
						</CommentBottom>
				</ReCommentWrap>
				}
			</RecommentContainer>
			{openReReCmt
			&& <>
				<GLine/>
				<FLine/>
				<RecommentContainer>
					<span>&#8627;</span>
					<ReCommentWrap>
						<CommentInput submitCmtHandler={uploadReReCmtHandler} placeholder={`${writer} 에게 댓글을 입력하세요.`} />
					</ReCommentWrap>
				</RecommentContainer>
				</>
			}
		</>
	);
}

export default ReComments