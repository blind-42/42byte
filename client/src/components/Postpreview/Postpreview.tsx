import { Link } from 'react-router-dom';
import { ContentData } from	'utils/functions/type';
import { shortening, timeForToday } from 'utils/functions/functions';
import { NoticeMark } from 'styles/styled';
import { PreviewContainer } from './styled';
import { useMediaQuery } from "react-responsive";


type GreetingProps = {
	postData: ContentData;
}

function PostPreview({ postData }: GreetingProps) {
	const { id, title, commentCnt, viewCnt, likeCnt, isNotice, blameCnt, createdDate, modifiedDate } = postData;

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

	return (
		<>
			<Link to={`/detail?boardId=1&postId=${id}`}> 
				<PreviewContainer state={isNotice}>
					{isNotice
						? <NoticeMark>공지</NoticeMark>
						: <div>{id}</div>
					}
					<div>
						{isMobile
						? <h3>{shortening(title, 12)}</h3>
						: <h3>{shortening(title, 22)}</h3>}
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
