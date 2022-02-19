import { useState } from 'react';
import instance from 'utils/functions/axios';
import DeleteModal from 'components/Modal/DeleteModal';
import { CommentData } from 'utils/functions/type';
import { CommentWrap, ModifyCommentWrap, CommentTop, Info, Modify, Content, GLine, FLine } from './styled'
import { CommentInput } from 'pages/Detail/styled'

type GreetingProps = {
	comment: CommentData
	commentsUserList: number[]
}

function Comments({comment, commentsUserList}: GreetingProps) {
	const { boardId, postId, id, authorId, content, likeCnt, blameCnt, isUsers, isAuthor, isDel, createdDate, modifiedDate } = comment;
	const [openCmmtDelModal, setOpenCmmtDelModal] = useState<boolean>(false);
	const [modifyState, setModifyState] = useState<boolean>(false);
	const [modifyCmmt, setModifyCmmt] = useState<string>(content || '');

	const clickCmmtDelModalHandler = () => {
		setOpenCmmtDelModal(!openCmmtDelModal);
	}

	const modifyHandler = () => {
		setModifyState(!modifyState);
	}

	const inputModifyCmmtHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setModifyCmmt(e.target.value);
	}
	
	const deleteCmmtHandler = () => {
		instance
		.delete(`/comment?commentId=${id}`)
		.then(() => {window.location.href = `/detail?boardId=${boardId}&postId=${postId}`})
		.catch((err) => console.log(err));
	}

	const sendModifyCmmtHandler = () => {
		instance
		.put(`/comment?commentId=${id}`)
		.then(() => {window.location.href = `/detail?boardId=${boardId}&postId=${postId}`})
		.catch((err) => console.log(err));
	}

	return (
		<>
		{openCmmtDelModal && (
			<DeleteModal clickModalHandler={clickCmmtDelModalHandler}
										deleteHandler={deleteCmmtHandler}/>)}
			{modifyState
			? <ModifyCommentWrap>
					<CommentTop>
						<Info>
							{isAuthor ? <h3>작성자</h3>
								: isUsers ? <h3><u>카뎃 {commentsUserList.indexOf(authorId)+1}</u></h3>
								: <h3>카뎃 {commentsUserList.indexOf(authorId)+1}</h3>}
						</Info>
						<Modify>
							<div onClick={modifyHandler}>취소</div>
						</Modify>
					</CommentTop>
					<Content>
						<CommentInput>
							<textarea defaultValue={content} onChange={inputModifyCmmtHandler} maxLength={300} />
							<div>
								<span>{modifyCmmt.length} / 300</span>
								<input type='button' value='등록' onClick={sendModifyCmmtHandler}/>
							</div>
						</CommentInput>
					</Content>
				</ModifyCommentWrap>
			: <CommentWrap>
				<CommentTop>
					<Info>
						{isAuthor ? <h3>작성자</h3>
							: isUsers ? <h3><u>카뎃 {commentsUserList.indexOf(authorId)+1}</u></h3>
							: <h3>카뎃 {commentsUserList.indexOf(authorId)+1}</h3>}
						<div>{createdDate?.slice(5, 10)}</div>
					</Info>
					{(isUsers && !isDel) && <Modify>
						<div onClick={modifyHandler}>수정</div>
						<div onClick={clickCmmtDelModalHandler}>삭제</div>
					</Modify>}
				</CommentTop>
				<Content>
					{isDel? <div className='isDel'>&#9986; 삭제된 댓글 입니다.</div> 
								: <div>{content}</div>}
				</Content>
			</CommentWrap>
			}
			<GLine/>
			<FLine/>
		</>
	);
}

export default Comments