import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { LoginState } from 'States/LoginState';
import { GoSearch } from 'react-icons/go';
import Error from 'pages/Error/Error';
import LoginModal from 'components/Modal/LoginModal';
import instance from 'utils/functions/axios';
import { BoardList, BoardPre } from 'utils/functions/type';
import { stringLimit } from 'utils/functions/functions';
import {
  MenubarContainer,
  Topbar,
  ContentContainer,
  UserProfileWrap,
  UserImg,
  UserMenuWritingButtonWrap,
  UserMenu,
  UtilWrap,
  WritingButton,
  Search,
  BoardListWrap,
  WelcomePhrase,
  BoardNames,
} from './styled';

type GreetingProps = {
  menubarHandler: () => void;
};

export default function Menubar({ menubarHandler }: GreetingProps) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
  const [keyword, setKeyword] = useState('');
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

  const logoutHandler = () => {
    localStorage.removeItem('4242-token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const openLoginModalHandler = () => {
    setOpenLoginModal(!openLoginModal);
  };

  const keywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const searchHandeler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLoggedIn) {
      openLoginModalHandler();
    } else if (keyword) {
      window.location.href = `/search?boardId=0&keyword=${keyword}`;
    }
  };

  if (error) return <Error />;

  return (
    <>
      {openLoginModal && (
        <LoginModal openLoginModalHandler={openLoginModalHandler} />
      )}
      <MenubarContainer onClick={(e) => e.stopPropagation()}>
        <Topbar>
          <div onClick={menubarHandler}>&times;</div>
        </Topbar>
        <ContentContainer>
          <BoardListWrap>
            <WelcomePhrase>
              {isLoggedIn ? 'welcome!' : 'Join us?'}
            </WelcomePhrase>
            <BoardNames>
              {contents.map((el: BoardPre, idx) => {
                return (
                  !el.isDel &&
                  (isLoggedIn ? (
                    <Link to={`/board?boardId=${el.id}`} key={idx}>
                      <div onClick={menubarHandler}>
                        <img src="images/folder.png" />{' '}
                        {stringLimit(el.name, 10)}
                      </div>
                    </Link>
                  ) : (
                    <div onClick={openLoginModalHandler}>
                      <img src="images/folder.png" /> {stringLimit(el.name, 10)}
                    </div>
                  ))
                );
              })}
            </BoardNames>
          </BoardListWrap>
          <UserProfileWrap>
            <UserImg state={isLoggedIn}>
              {isLoggedIn ? (
                <img
                  src={`images/${localStorage.getItem('4242-profile')}`}
                  alt="pfimg"
                />
              ) : (
                <img src="images/ghost.png" alt="pfimg" />
              )}
            </UserImg>
            {isLoggedIn ? (
              <UserMenuWritingButtonWrap>
                <UserMenu>
                  <Link to="/mypage?=post&page=1">
                    <span>마이페이지</span>
                  </Link>
                  <Link to="/" onClick={logoutHandler}>
                    <span>로그아웃</span>
                  </Link>
                </UserMenu>
                <WritingButton>
                  <Link to="/writing">
                    <input type="button" value="새 글쓰기" />
                  </Link>
                </WritingButton>
              </UserMenuWritingButtonWrap>
            ) : (
              <UserMenuWritingButtonWrap>
                <UserMenu></UserMenu>
                <WritingButton>
                  <Link to="/login">
                    <input type="button" value="로그인" />
                  </Link>
                </WritingButton>
              </UserMenuWritingButtonWrap>
            )}
          </UserProfileWrap>
          <UtilWrap>
            <Search>
              <form name="searchForm" onSubmit={searchHandeler}>
                <input
                  type="text"
                  onChange={keywordHandler}
                  placeholder="검색어를 입력하세요"
                />
                <button>
                  <div>
                    <GoSearch />
                  </div>
                </button>
              </form>
            </Search>
          </UtilWrap>
        </ContentContainer>
      </MenubarContainer>
    </>
  );
}
