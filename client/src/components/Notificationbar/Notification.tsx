import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { NotificationData } from 'utils/functions/type';
import instance from 'utils/functions/axios';
import { stringLimit } from 'utils/functions/functions';
import { NotificationWrap, ContentWrap, DeleteButton } from './styled';

type GreetingProps = {
  notificationData: NotificationData;
  notificationHandler: () => void;
};
export default function Notification({
  notificationData,
  notificationHandler,
}: GreetingProps) {
  const { id, postId, contentType, title, content } = notificationData;
  const mutationDelete = useMutation(({ path }: { path: string }) =>
    instance.delete(path),
  );
  const navigate = useNavigate();
  const deleteNotificationHandler = () => {
    mutationDelete.mutate(
      { path: `/notification?id=${id}` },
      {
        onSuccess: () => {
          notificationHandler();
        },
        onError: (err) => {
          console.log(err);
        },
      },
    );
  };

  return (
    <>
      <NotificationWrap>
        <ContentWrap
          onClick={() => {
            navigate(`/detail?=postId=${postId}`);
          }}
        >
          {contentType === 'post' ? (
            <div>
              "{stringLimit(title, 6)}" 게시글에 새로운 댓글이 있습니다.
            </div>
          ) : (
            <div>"{stringLimit(title, 6)}" 댓글에 새로운 댓글이 있습니다.</div>
          )}
          <div>{stringLimit(content, 10)}</div>
        </ContentWrap>
        <DeleteButton onClick={deleteNotificationHandler}>&times;</DeleteButton>
      </NotificationWrap>
    </>
  );
}