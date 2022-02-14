import { CommentData } from 'utils/functions/type';
import { CommentWrap, CommentTop, Info, Modify, Content, Line } from './styled'

type GreetingProps = {
	comment: CommentData
}

function Comments({comment}: GreetingProps) {
	const { createdDate, modifiedDate, id, authorId, content, likeCnt, blameCnt, isAuthor, isDel } = comment;

	return (
		<>
		<CommentWrap>
			<CommentTop>
				<Info>
					<h3>카뎃2</h3>
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