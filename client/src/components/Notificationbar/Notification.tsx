import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { NotificationData } from 'utils/functions/type';
import instance from 'utils/functions/axios';
import { stringLimit, timeForToday } from 'utils/functions/functions';
import {
  NotificationWrap,
  ContentWrap,
  NotificationPhrase,
  ContentDetailWrap,
  DeleteButton,
} from './styled';

type GreetingProps = {
  notificationData: NotificationData;
  notificationHandler: () => void;
};
export default function Notification({
  notificationData,
  notificationHandler,
}: GreetingProps) {
  const { id, postId, contentType, title, content, modifiedDate } =
    notificationData;
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
            notificationHandler();
          }}
        >
          <NotificationPhrase>
            {contentType === 'post' ? (
              <div>
                {stringLimit(
                  `"${stringLimit(title, 6)}" 게시글에 새로운 댓글이 있습니다.`,
                  22,
                )}
              </div>
            ) : (
              <div>
                {stringLimit(
                  `"${stringLimit(title, 6)}" 댓글에 새로운 댓글이 있습니다.`,
                  22,
                )}
              </div>
            )}
          </NotificationPhrase>
          <ContentDetailWrap>
            <div>{stringLimit(content, 12)}</div>
            <div>{timeForToday(modifiedDate, 'notification')}</div>
          </ContentDetailWrap>
        </ContentWrap>
        <DeleteButton onClick={deleteNotificationHandler}>&times;</DeleteButton>
      </NotificationWrap>
    </>
  );
}
