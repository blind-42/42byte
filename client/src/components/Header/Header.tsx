import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Menubar from 'components/Menubar/Menubar';
import Notificationbar from 'components/Notificationbar/Notificationbar';
import instance from 'utils/functions/axios';
import Clock from './Clock';
import { UserData } from 'utils/functions/type';
import {
  HeaderContainer,
  MenubarLogoWrap,
  MenubarButton,
  UtilButton,
} from './styled';

export default function Header() {
  const [userData, setUserData] = useState<UserData>({
    createdDate: '',
    modifiedDate: '',
    hashId: '',
    profileImageUrl: '',
    isChecked: false,
    roleType: '',
  });
  const [noticeChecked, setNoticeChecked] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showNotificationbar, setShowNotificationbar] = useState(false);
  const navigate = useNavigate();
  const { data } = useQuery(
    ['user_key'],
    () => {
      instance.get('/user').then((res) => {
        setUserData(res.data);
        setNoticeChecked(res.data.isChecked);
      });
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const menubarHandler = () => {
    setShowMenu(!showMenu);
  };
  console.log(noticeChecked);
  const showNotificationHandler = () => {
    setNoticeChecked(true);
    setShowNotificationbar(!showNotificationbar);
  };

  return (
    <>
      <HeaderContainer>
        <MenubarLogoWrap>
          <MenubarButton onClick={menubarHandler}>MENU</MenubarButton>
          {showMenu && <Menubar menubarHandler={menubarHandler} />}
          <UtilButton onClick={() => navigate('/')}>
            <img src="images/bLogo.png" alt="LOGO" />
          </UtilButton>
          <UtilButton onClick={showNotificationHandler}>
            {noticeChecked ? (
              <img src="images/notice_off.png" alt="notice" />
            ) : (
              <img src="images/notice_on.png" alt="notice" />
            )}
          </UtilButton>
          {showNotificationbar && (
            <Notificationbar notificationHandler={showNotificationHandler} />
          )}
        </MenubarLogoWrap>
        <Clock />
      </HeaderContainer>
    </>
  );
}
