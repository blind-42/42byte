import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { NotificationData } from 'utils/functions/type';
import instance from 'utils/functions/axios';
import { stringLimit } from 'utils/functions/functions';
import { NotificationWrap, ContentWrap, DeleteButton } from './styled';

type GreetingProps = {
  notificationData: NotificationData;
};
export default function Notification({ notificationData }: GreetingProps) {
  const { id, postId, contentType, title, content } = notificationData;
  const mutationDelete = useMutation(({ path }: { path: string }) =>
    instance.delete(path),
  );
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const deleteNotificationHandler = () => {
    mutationDelete.mutate(
      { path: `/notification?id=${id}` },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['notification_key']);
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
          <div>{stringLimit(content, 15)}</div>
        </ContentWrap>
        <DeleteButton onClick={deleteNotificationHandler}>&times;</DeleteButton>
      </NotificationWrap>
    </>
  );
}
