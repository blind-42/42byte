import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { LoggedinState } from 'States/LoginState';
import { GoSearch } from 'react-icons/go';
import { AiFillFolderOpen } from 'react-icons/ai';
import Loading from 'pages/Loading/Loading';
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
  Profile,
  UserImg,
  UserName,
  UserMenu,
  UtilWrap,
  WritingBtn,
  Search,
  BoardListWrap,
  WrapTitle,
  BoardNames,
} from './styled';

type GreetingProps = {
  menubarHandler: () => void;
};

export default function Menubar({ menubarHandler }: GreetingProps) {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoggedinState);
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
    }
    window.location.href = `/search?boardId=0&keyword=${keyword}`;
  };

  if (isFetching || isLoading) return <Loading />;

  if (error) return <Error />;

  return (
    <>
      {openLoginModal && (
        <LoginModal openLoginModalHandler={openLoginModalHandler} />
      )}
      <MenubarContainer>
        <Topbar>
          <div onClick={menubarHandler}>&times;</div>
        </Topbar>
        <ContentContainer>
          <BoardListWrap>
            <WrapTitle>
              {isLoggedIn ? 'welcome!' : 'Join us? '}
              <img src="/images/dogfoot.png" alt="footimg" />
            </WrapTitle>
            <BoardNames>
              {contents.map((el: BoardPre, idx) => {
                return (
                  !el.isDel && (
                    <Link to={`/board?=boardId=${el.id}`} key={idx}>
                      <div onClick={menubarHandler}>
                        <AiFillFolderOpen /> {stringLimit(el.name, 10)}
                      </div>
                    </Link>
                  )
                );
              })}
            </BoardNames>
          </BoardListWrap>
          <UserProfileWrap>
            <Profile>
              <UserImg>
                <img src="/images/egg.png" alt="pfimg" />
              </UserImg>
              <UserName>
                {isLoggedIn ? (
                  <div>
                    <strong>카뎃</strong>
                  </div>
                ) : (
                  <Link to="/login">로그인</Link>
                )}
              </UserName>
            </Profile>
            {isLoggedIn && (
              <UserMenu>
                <Link to="/mypage?=post&page=1">
                  <span>마이페이지</span>
                </Link>
                <Link to="/" onClick={logoutHandler}>
                  <span>로그아웃</span>
                </Link>
                <WritingBtn>
                  {isLoggedIn ? (
                    <Link to="/writing">
                      <input type="button" value="새 글쓰기" />
                    </Link>
                  ) : (
                    <input
                      type="button"
                      value="새 글쓰기"
                      onClick={openLoginModalHandler}
                    />
                  )}
                </WritingBtn>
              </UserMenu>
            )}
          </UserProfileWrap>
          <UtilWrap>
            {/* {isLoggedIn ? ( */}
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
            {/* ) : (
              <Search onClick={openLoginModalHandler}>
                <form name="searchForm">
                  <input type="text" placeholder="검색어를 입력하세요" />
                  <button>
                    <div>
                      <GoSearch />
                    </div>
                  </button>
                </form>
              </Search>
            )} */}
          </UtilWrap>
        </ContentContainer>
      </MenubarContainer>
    </>
  );
}
