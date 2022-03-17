import { useState } from 'react';
import { useQueryClient, useQuery, useMutation } from 'react-query';
import Notification from './Notification';
import { NotificationData, NotificationDetail } from 'utils/functions/type';
import instance from 'utils/functions/axios';
import {
  NotificationContainer,
  Topbar,
  EmptyNotificationMessage,
  ContentContainer,
  NotificationList,
  NotificationTool,
} from './styled';

type GreetingProps = {
  notificationHandler: () => void;
  notificationData: NotificationData;
};

export default function Notificationbar({
  notificationHandler,
  notificationData,
}: GreetingProps) {
  const { total, contents } = notificationData;
  const queryClient = useQueryClient();
  const mutationPut = useMutation(({ path }: { path: string }) =>
    instance.put(path),
  );
  const mutationDelete = useMutation(({ path }: { path: string }) =>
    instance.delete(path),
  );

  const checkAllHandler = () => {
    mutationPut.mutate(
      { path: '/notification/check/all' },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['notification_key']);
          notificationHandler();
        },
        onError: (err) => {
          console.log(err);
        },
      },
    );
  };

  const deleteAllHandler = () => {
    mutationDelete.mutate(
      { path: '/notification/all' },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(['notification_key']);
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
      <NotificationContainer onClick={(e) => e.stopPropagation()}>
        <Topbar>
          <div onClick={notificationHandler}>&times;</div>
        </Topbar>
        {contents.length === 0 ? (
          <EmptyNotificationMessage>
            새로운 알림이 없습니다!
          </EmptyNotificationMessage>
        ) : (
          <ContentContainer>
            <NotificationTool>
              <div onClick={checkAllHandler}>전체 읽음 처리</div>
              <div onClick={deleteAllHandler}>전체 삭제</div>
            </NotificationTool>
            <NotificationList>
              {contents.map((el: NotificationDetail, idx) => {
                return (
                  <Notification
                    key={idx}
                    notificationDetail={el}
                    notificationHandler={notificationHandler}
                  />
                );
              })}
            </NotificationList>
          </ContentContainer>
        )}
      </NotificationContainer>
    </>
  );
}
