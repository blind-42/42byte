import { Link } from 'react-router-dom';
import { ContentData } from	'utils/functions/type';
import { PreviewContainer } from './styled';

type GreetingProps = {
	content: ContentData;
}

function Postpreview({ content }: GreetingProps) {
	const { id, authorId, title, commentCnt, viewCnt, likeCnt, isNotice, blameCnt, createdDate, modifiedDate } = content;
	const fullday = new Date();
	const year = `${fullday.getFullYear()}`;
	const month = fullday.getMonth() + 1 < 10 ? `0${fullday.getMonth() + 1}` : `${fullday.getMonth() + 1}`;
	const date = `${fullday.getDate()}`;
	const today = year + '-' + month + '-' + date;

	return (
		<>
			<Link to={`/detail?boardId=1&postId=${id}`}> 
				<PreviewContainer>
					<h3>{title}	({commentCnt})</h3>
					<div>{viewCnt}</div>
					<div>{likeCnt}</div>
					<div>{createdDate.slice(0, 10) === today
						? createdDate.slice(11, 16)
						: createdDate.slice(2,10)}</div>
				</PreviewContainer>
			</Link>
		</>
	);
}

export default Postpreview;
