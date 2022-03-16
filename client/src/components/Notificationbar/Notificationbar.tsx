import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import Notification from './Notification';
import { NotificationData } from 'utils/functions/type';
import instance from 'utils/functions/axios';
import { NotificationContainer, Topbar, NotificationList } from './styled';

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
      <NotificationContainer>
        <Topbar>
          <div onClick={notificationHandler}>&times;</div>
        </Topbar>
        <NotificationList>
          {notificationData.map((el: NotificationData, idx) => {
            return (
              <Notification
                notificationData={el}
                notificationHandler={notificationHandler}
              />
            );
          })}
        </NotificationList>
      </NotificationContainer>
    </>
  );
}
