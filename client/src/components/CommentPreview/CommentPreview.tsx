import { useNavigate } from 'react-router-dom';
import { CommentPre } from 'utils/functions/type';
import { stringLimit, timeForToday } from 'utils/functions/functions';
import { CommentPreviewContainer, CommentWrap, OriginalPost } from './styled';
import { useMediaQuery } from 'react-responsive';

type GreetingProps = {
  commentData: CommentPre;
};

function CommentPreview({ commentData }: GreetingProps) {
  const {
    id,
    boardId,
    postId,
    authorId,
    content,
    commentCnt,
    likeCnt,
    blameCnt,
    isAuthor,
    isDel,
    title,
    createdDate,
    modifiedDate,
  } = commentData;
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    <>
      <CommentPreviewContainer
        onClick={() => navigate(`/detail?postId=${postId}`)}
      >
        <CommentWrap>
          {isMobile ? (
            <div>{stringLimit(content, 16)}</div>
          ) : (
            <div>{stringLimit(content, 25)}</div>
          )}
          <div>{timeForToday(createdDate, 'post')}</div>
        </CommentWrap>
        <OriginalPost>
          {isMobile ? (
            <h3>{stringLimit(title, 16)}</h3>
          ) : (
            <h3>{stringLimit(title, 30)}</h3>
          )}
          <div>[{commentCnt}]</div>
        </OriginalPost>
      </CommentPreviewContainer>
    </>
  );
}

export default CommentPreview;
