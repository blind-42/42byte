import { useState } from 'react';
import { useQueryClient, useQuery, useMutation } from 'react-query';
import Notification from './Notification';
import { NotificationData } from 'utils/functions/type';
import instance from 'utils/functions/axios';
import {
  NotificationContainer,
  Topbar,
  EmptyNotificationMessage,
  NotificationList,
} from './styled';

type GreetingProps = {
  notificationHandler: () => void;
};

export default function Notificationbar({
  notificationHandler,
}: GreetingProps) {
  const [notificationData, setNotificationData] = useState([]);
  const { isFetching, isLoading, error, data } = useQuery(
    ['notification_key'],
    () => {
      instance
        .get('/notification')
        .then((res) => setNotificationData(res.data));
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  return (
    <>
      <NotificationContainer onClick={(e) => e.stopPropagation()}>
        <Topbar>
          <div onClick={notificationHandler}>&times;</div>
        </Topbar>
        {notificationData.length === 0 ? (
          <EmptyNotificationMessage>
            새로운 알림이 없습니다!
          </EmptyNotificationMessage>
        ) : (
          <NotificationList>
            {notificationData.map((el: NotificationData, idx) => {
              return (
                <Notification
                  key={idx}
                  notificationData={el}
                  notificationHandler={notificationHandler}
                />
              );
            })}
          </NotificationList>
        )}
      </NotificationContainer>
    </>
  );
}
