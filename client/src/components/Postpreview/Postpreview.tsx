import { Link } from 'react-router-dom';
import { ContentData } from	'utils/functions/type';
import { shortening, timeForToday } from 'utils/functions/functions';
import { PreviewContainer, NoticeMark } from './styled';

type GreetingProps = {
	postData: ContentData;
}

function PostPreview({ postData }: GreetingProps) {
	const { id, title, commentCnt, viewCnt, likeCnt, isNotice, blameCnt, createdDate, modifiedDate } = postData;

	return (
		<>
			<Link to={`/detail?boardId=1&postId=${id}`}> 
				<PreviewContainer state={isNotice}>
					{isNotice
						? <NoticeMark>공지</NoticeMark>
						: <div>{id}</div>
					}
					<div>
						<h3>{shortening(title, 12)}</h3>
						<div>[{commentCnt}]</div>
					</div>
					<div>{viewCnt}</div>
					<div>{likeCnt}</div>
					<div>{timeForToday(createdDate)}</div>
				</PreviewContainer>
			</Link>
		</>
	);
}

export default PostPreview;
