import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Menubar from 'components/Menubar/Menubar';
import Notificationbar from 'components/Notificationbar/Notificationbar';
import instance from 'utils/functions/axios';
import Clock from './Clock';
import { NotificationData } from 'utils/functions/type';
import {
  HeaderContainer,
  MenubarNotificationWrap,
  LogoClockWrap,
  MenubarButton,
  UtilButton,
  Logo,
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

  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const showMenubarHandler = () => {
    setShowMenu(!showMenu);
  };

  const showNotificationHandler = () => {
    setShowNotificationbar(!showNotificationbar);
  };

  return (
    <>
      <HeaderContainer>
        <MenubarNotificationWrap>
          <MenubarButton onClick={showMenubarHandler}>MENU</MenubarButton>
          {showMenu && (
            <HeaderBackdrop onClick={showMenubarHandler}>
              <Menubar menubarHandler={showMenubarHandler} />
            </HeaderBackdrop>
          )}
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
        </MenubarNotificationWrap>
        <LogoClockWrap>
          <Logo onClick={() => navigate('/')}>
            {isMobile ? (
              <img src="images/BLogo.png" alt="LOGO" />
            ) : (
              <img src="images/42byteLogo.png" alt="LOGO" />
            )}
          </Logo>
          <Clock />
        </LogoClockWrap>
      </HeaderContainer>
    </>
  );
}
