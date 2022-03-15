import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { LoginState } from 'States/LoginState';
import Header from '../../components/Header/Header';
import LoginModal from 'components/Modal/LoginModal';
import instance from 'utils/functions/axios';
import { stringLimit } from 'utils/functions/functions';
import { UserData } from 'utils/functions/type';
import { BoardList, BoardPre } from 'utils/functions/type';
import { AppContainer } from 'styles/styled';
import {
  PageContainer,
  LogoImg,
  BoardIconWrap,
  BoardIcon,
  AdminPageButton,
} from './styled';

export default function Main() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const token = window.location.href.split('?token=')[1];
  const [userData, setUserData] = useState<UserData>({
    createdDate: '',
    modifiedDate: '',
    hashId: '',
    profileImageUrl: '',
    roleType: '',
  });
  const { roleType } = userData;
  const [boardList, setBoardList] = useState<BoardList>({
    contents: [],
    page: 0,
    pages: 0,
  });
  const { contents, page, pages } = boardList;
  const { isFetching, isLoading, error, data } = useQuery(
    ['menubar_key'],
    () => {
      instance.get('/board/list').then((res) => setBoardList(res.data));
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (token) localStorage.setItem('4242-token', token);
    if (localStorage.getItem('4242-token')) setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    const currentURL = window.location.search;
    if (currentURL.includes('token')) {
      navigate('');
    }
  }, [window.location.href]);

  useEffect(() => {
    instance
      .get('/user')
      .then((res) => {
        setUserData(res.data);
        localStorage.setItem('4242-profile', res.data.profileImageUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  const openLoginModalHandler = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const moveToAdmin = () => {
    instance
      .get('/admin')
      .then(
        () =>
          (window.location.href = `${process.env.REACT_APP_SERVERIP}/admin`),
      )
      .catch(() => alert('꺼지3'));
  };

  return (
    <>
      {openLoginModal && (
        <LoginModal openLoginModalHandler={openLoginModalHandler} />
      )}
      <AppContainer>
        <PageContainer>
          <LogoImg>
            <img src="images/42byteLogo.png" />
          </LogoImg>
          <BoardIconWrap>
            {contents.map((el: BoardPre, idx) => {
              return (
                !el.isDel &&
                (isLoggedIn ? (
                  <BoardIcon>
                    <Link to={`/board?=boardId=${el.id}`} key={idx}>
                      <img src="images/folder.png" />
                      <div>{stringLimit(el.name, 7)}</div>
                    </Link>
                  </BoardIcon>
                ) : (
                  <BoardIcon onClick={openLoginModalHandler}>
                    <img src="images/folder.png" />
                    <div>{stringLimit(el.name, 7)}</div>
                  </BoardIcon>
                ))
              );
            })}
          </BoardIconWrap>
          {roleType === 'ADMIN' && (
            <AdminPageButton onClick={moveToAdmin}>
              <img src="images/adminIcon.png" alt="adminIcon" />
              <div>Settings</div>
            </AdminPageButton>
          )}
          ∂
        </PageContainer>
        <Header />
      </AppContainer>
    </>
  );
}
