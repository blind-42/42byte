import { useState } from 'react';
import { CommentData } from 'utils/functions/type';
import { CommentWrap, CommentTop, Info, Modify, Content, Line } from './styled'

type GreetingProps = {
	comment: CommentData
	commentsUserList: number[]
	commentAuthorId: number
	clickModalHandler: () => void
	clickCmmtDelHandler: (id:number) => void
}

function Comments({comment, commentsUserList, commentAuthorId, clickModalHandler, clickCmmtDelHandler}: GreetingProps) {
	const { createdDate, modifiedDate, id, authorId, content, likeCnt, blameCnt, isAuthor, isDel } = comment;

	return (
		<>
		<CommentWrap>
			<CommentTop>
				<Info>
					{isAuthor? <h3><u>작성자</u></h3>: <h3>카뎃 {commentsUserList.indexOf(authorId)+1}</h3>}
					<div>{createdDate?.slice(5, 10)}</div>
				</Info>
				{commentAuthorId === authorId && <Modify>
					<div>수정</div>
					<div onClick={() => {clickModalHandler();
																clickCmmtDelHandler(id);}}>삭제</div>
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