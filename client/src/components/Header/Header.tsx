import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Menubar from 'components/Menubar/Menubar';
import Notificationbar from 'components/Notificationbar/Notificationbar';
import instance from 'utils/functions/axios';
import Clock from './Clock';
import { NotificationData } from 'utils/functions/type';
import {
  HeaderContainer,
  MenubarLogoWrap,
  MenubarButton,
  UtilButton,
  HeaderBackdrop,
} from './styled';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNotificationbar, setShowNotificationbar] = useState(false);
  const [notificationData, setNotificationData] = useState<NotificationData>({
    total: 0,
    contents: [],
  });
  const { total, contents } = notificationData;
  const navigate = useNavigate();
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

  const showMenubarHandler = () => {
    setShowMenu(!showMenu);
  };

  const showNotificationHandler = () => {
    setShowNotificationbar(!showNotificationbar);
  };

  return (
    <>
      <HeaderContainer>
        <MenubarLogoWrap>
          <MenubarButton onClick={showMenubarHandler}>MENU</MenubarButton>
          {showMenu && (
            <HeaderBackdrop onClick={showMenubarHandler}>
              <Menubar menubarHandler={showMenubarHandler} />
            </HeaderBackdrop>
          )}
          <UtilButton onClick={() => navigate('/')}>
            <img src="images/BLogo.png" alt="LOGO" />
          </UtilButton>
          {total ? (
            <UtilButton onClick={showNotificationHandler}>
              <img src="images/notice_on.png" alt="notice" />
              <div>{total}</div>
            </UtilButton>
          ) : (
            <UtilButton onClick={showNotificationHandler}>
              <img src="images/notice_off.png" alt="notice" />
            </UtilButton>
          )}
          {showNotificationbar && (
            <HeaderBackdrop onClick={showNotificationHandler}>
              <Notificationbar
                notificationHandler={showNotificationHandler}
                notificationData={notificationData}
              />
            </HeaderBackdrop>
          )}
        </MenubarLogoWrap>
        <Clock />
      </HeaderContainer>
    </>
  );
}
