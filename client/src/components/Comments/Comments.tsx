import { CommentData } from 'utils/functions/type';
import { CommentWrap, CommentTop, Info, Modify, Content, Line } from './styled'

type GreetingProps = {
	comment: CommentData
	commentsUserList: number[]
}

function Comments({comment,commentsUserList}: GreetingProps) {
	const { createdDate, modifiedDate, id, authorId, content, likeCnt, blameCnt, isAuthor, isDel } = comment;
console.log(commentsUserList.indexOf(authorId))
	return (
		<>
		<CommentWrap>
			<CommentTop>
				<Info>
					{isAuthor? <h3><u>작성자</u></h3>: <h3>카뎃 {commentsUserList.indexOf(authorId)+1}</h3>}
					<div>{createdDate?.slice(5, 10)}</div>
				</Info>
				<Modify>
					<div>수정</div>
					<div>삭제</div>
				</Modify>
			</CommentTop>
			<Content>
				<div>{content}</div>
			</Content>
		</CommentWrap>
		<Line/>
		</>
	);
}

export default Comments