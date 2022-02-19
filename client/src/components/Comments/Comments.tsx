import { useState } from 'react';
import instance from 'utils/functions/axios';
import DeleteModal from 'components/Modal/DeleteModal';
import { CommentData } from 'utils/functions/type';
import { CommentWrap, CommentTop, Info, Modify, Content, Line } from './styled'

type GreetingProps = {
	comment: CommentData
	commentsUserList: number[]
}

function Comments({comment, commentsUserList}: GreetingProps) {
	const { boardId, postId, id, authorId, content, likeCnt, blameCnt, isUsers, isAuthor, isDel, createdDate, modifiedDate } = comment;
	const [openCmmtDelModal, setOpenCmmtDelModal] = useState<boolean>(false);

	const clickCmmtDelModalHandler = () => {
		setOpenCmmtDelModal(!openCmmtDelModal);
	}

	const deleteCmmtHandler = () => {
		instance
		.delete(`/comment?commentId=${id}`)
		.then(() => {window.location.href = `/detail?boardId=${boardId}&postId=${postId}`})
		.catch((err) => console.log(err));
	}

	return (
		<>
		{openCmmtDelModal && (
			<DeleteModal clickModalHandler={clickCmmtDelModalHandler}
										deleteHandler={deleteCmmtHandler}/>)}
			<CommentWrap>
				<CommentTop>
					<Info>
						{isAuthor ? <h3>작성자</h3>
							: isUsers ? <h3><u>카뎃 {commentsUserList.indexOf(authorId)+1}</u></h3>
							: <h3>카뎃 {commentsUserList.indexOf(authorId)+1}</h3>}
						<div>{createdDate?.slice(5, 10)}</div>
					</Info>
					{(isUsers && !isDel) && <Modify>
						<div>수정</div>
						<div onClick={clickCmmtDelModalHandler}>삭제</div>
					</Modify>}
				</CommentTop>
				<Content>
					{isDel? <div className='isDel'>&#9986; 삭제된 댓글 입니다.</div> 
								: <div>{content}</div>}
				</Content>
			</CommentWrap>
			<Line/>
		</>
	);
}

export default Comments