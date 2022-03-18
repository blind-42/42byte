import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { NotificationData, NotificationDetail } from 'utils/functions/type';
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
  notificationDetail: NotificationDetail;
  notificationHandler: () => void;
};
export default function Notification({
  notificationDetail,
  notificationHandler,
}: GreetingProps) {
  const { id, postId, contentType, title, content, isChecked, modifiedDate } =
    notificationDetail;
  const mutationPut = useMutation(({ path }: { path: string }) =>
    instance.put(path),
  );
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

  const clickNotificationHandler = () => {
    mutationPut.mutate(
      { path: `/notification/check?id=${id}` },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['notification_key']);
          navigate(`/detail?=postId=${postId}`);
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
      <NotificationWrap state={isChecked}>
        <ContentWrap onClick={clickNotificationHandler}>
          <NotificationPhrase>
            {contentType === 'post' ? (
              <div>
                {`"${stringLimit(title, 6)}" 게시글에 새로운 댓글이 있습니다.`}
              </div>
            ) : (
              <div>
                {`"${stringLimit(title, 6)}" 댓글에 새로운 댓글이 있습니다.`}
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
