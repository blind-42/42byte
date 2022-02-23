import { Link } from 'react-router-dom';
import { CommentData } from 'pages/Mypage/Mypage';
import { shortening, timeForToday } from 'utils/functions/functions';
import { CommentPreviewContainer, CommentWrap, OriginalPost } from './styled';

type GreetingProps = {
	commentData: CommentData;
}

function CommentPreview({ commentData }: GreetingProps) {
	const { id, boardId, postId, authorId, content, commentCnt, likeCnt, blameCnt, isAuthor, isDel, title, createdDate, modifiedDate } = commentData;

	return (
		<>
			<Link to={`/detail?boardId=1&postId=${postId}`}> 
				<CommentPreviewContainer>
					<CommentWrap>
						<div>{shortening(content, 20)}</div>
						<div>{timeForToday(createdDate)}</div>
					</CommentWrap>
					<OriginalPost>
						<h3>{shortening(title, 15)}</h3>
						<div>[{commentCnt}]</div>
					</OriginalPost>
				</CommentPreviewContainer>
			</Link>
		</>
	);
}

export default CommentPreview;
