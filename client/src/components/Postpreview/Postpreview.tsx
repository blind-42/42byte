import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { PostPre } from 'utils/functions/type';
import { stringLimit, timeForToday } from 'utils/functions/functions';
import { NoticeMark } from 'styles/styled';
import { PreviewContainer } from './styled';

type GreetingProps = {
  postData: PostPre;
};

function PostPreview({ postData }: GreetingProps) {
  const {
    id,
    viewId,
    title,
    commentCnt,
    viewCnt,
    likeCnt,
    isNotice,
    isDel,
    type,
    isImage,
    createdDate,
    modifiedDate,
  } = postData;

  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <>
      <Link to={`/detail?boardId=1&postId=${id}`}>
        <PreviewContainer state={isNotice}>
          {isNotice ? <NoticeMark>공지</NoticeMark> : <div>{viewId}</div>}
          <div>
            {isMobile ? (
              <h3>{stringLimit(title, 12)}</h3>
            ) : (
              <h3>{stringLimit(title, 22)}</h3>
            )}
            {isImage && (
              <div>
                <img src="images/image.png" />
              </div>
            )}
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
