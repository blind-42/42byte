import { useState } from 'react';
import { CommentData } from 'utils/functions/type';
import { CommentWrap, CommentTop, Info, Modify, Content, Line } from './styled'

type GreetingProps = {
	comment: CommentData
	commentsUserList: number[]
	clickModalHandler: () => void
	clickCmmtDelIdHandler: (id:number) => void
}

function Comments({comment, commentsUserList, clickModalHandler, clickCmmtDelIdHandler}: GreetingProps) {
	const { boardId, postId, id, authorId, content, likeCnt, blameCnt, isUsers, isAuthor, isDel, createdDate, modifiedDate } = comment;

	return (
		<>
		<CommentWrap>
			<CommentTop>
				<Info>
					{isAuthor? <h3>작성자</h3>: 
						isUsers? <h3><u>카뎃 {commentsUserList.indexOf(authorId)+1}</u></h3>
						: <h3>카뎃 {commentsUserList.indexOf(authorId)+1}</h3>}
					<div>{createdDate?.slice(5, 10)}</div>
				</Info>
				{isUsers && <Modify>
					<div>수정</div>
					<div onClick={() => {clickModalHandler();
																clickCmmtDelIdHandler(id);}}>삭제</div>
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