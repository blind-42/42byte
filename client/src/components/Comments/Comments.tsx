import { useState } from 'react';
import instance from 'utils/functions/axios';
import DeleteModal from 'components/Modal/DeleteModal';
import { CommentData } from 'utils/functions/type';
import { timeForToday } from 'utils/functions/functions';
import { GrLike } from "react-icons/gr";
import { CommentWrap, ModifyCommentWrap, CommentTop, Info, Modify, Content, 
				LikesBox, GLine, FLine } from './styled'
import { CommentInput } from 'pages/Detail/styled'
import React from 'react';

type GreetingProps = {
	comment: CommentData
	commentsUserList: number[]
  setReRender: React.Dispatch<React.SetStateAction<boolean>>
}

function Comments({comment, commentsUserList, setReRender}: GreetingProps) {
	const { boardId, postId, id, authorId, content, likeCnt, blameCnt, isUsers, isAuthor, isLiked, isDel, createdDate, modifiedDate } = comment;
	const [boxState, setBoxState] = useState<boolean>(isLiked);
	const [openCmmtDelModal, setOpenCmmtDelModal] = useState<boolean>(false);
	const [modifyState, setModifyState] = useState<boolean>(false);
	const [modifyCmmt, setModifyCmmt] = useState<string>(content);

console.log(commentsUserList);
	const clickCmmtDelModalHandler = () => {
		setOpenCmmtDelModal(!openCmmtDelModal);
	}

	const modifyHandler = () => {
		setModifyState(!modifyState);
	}

	const inputModifyCmmtHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setModifyCmmt(e.target.value);
	}

	const boxcolorHandler = () => {
		instance
		.post(`/comment/like?postId=${postId}&commentId=${id}`)
		.then(() => {
      setBoxState(!boxState)
      setReRender(prev => !prev)
    })
		.catch((err) => console.log(err));
	}
	
	const deleteCmmtHandler = () => {
		instance
		.delete(`/comment?commentId=${id}`)
    .then(() => {
      setOpenCmmtDelModal(!openCmmtDelModal);
      setReRender(prev => !prev)
    })
		.catch((err) => console.log(err));
	}

	const sendModifyCmmtHandler = () => {
		instance
		.put(`/comment?commentId=${id}`, {content: modifyCmmt})
    .then(() => {
      setModifyState(!modifyState);
      setReRender(prev => !prev)
    })
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
						<div>{timeForToday(createdDate)} {(createdDate !== modifiedDate) && '수정됨'}</div>
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
					<LikesBox boxState={boxState} onClick={boxcolorHandler}>
						<div><GrLike /></div>
						<div>{likeCnt}</div>
					</LikesBox>
			</CommentWrap>
			}
			<GLine/>
			<FLine/>
		</>
	);
}

export default React.memo(Comments)