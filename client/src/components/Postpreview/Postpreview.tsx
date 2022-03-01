import { Link } from 'react-router-dom';
import { PostPre } from	'utils/functions/type';
import { stringLimit, timeForToday } from 'utils/functions/functions';
import { NoticeMark } from 'styles/styled';
import { PreviewContainer } from './styled';
import { useMediaQuery } from "react-responsive";


type GreetingProps = {
	postData: PostPre;
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
						? <h3>{stringLimit(title, 12)}</h3>
						: <h3>{stringLimit(title, 22)}</h3>}
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
