import { Link } from 'react-router-dom';
import { ContentData } from	'utils/functions/type';
import { PreviewContainer } from './styled';

type GreetingProps = {
	content: ContentData;
}

function Postpreview({ content }: GreetingProps) {
	const { id, authorId, title, commentCnt, viewCnt, likeCnt, isNotice, blameCnt, createdDate, modifiedDate } = content;

	return (
		<>
			<Link to='/detail'> 
				<PreviewContainer>
					<h3>{title}	({commentCnt})</h3>
					<div>{viewCnt}</div>
					<div>{likeCnt}</div>
					<div>{createdDate.slice(5, 10)}</div>
				</PreviewContainer>
			</Link>
		</>
	);
}

export default Postpreview;
