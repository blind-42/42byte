import React, { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PostPreview from 'components/Postpreview/Postpreview';
import PageNation from 'components/PageNation/PageNation';
import Loading from 'components/Modal/Loading';
import Error from 'pages/Error/Error';
import instance from 'utils/functions/axios';
import { BoardData, PostPre } from 'utils/functions/type';
import { GoSearch } from 'react-icons/go';
import {
  AppContainer,
  PageContainer,
  TopBar,
  PageName,
  Squares,
  PostContainer,
  ContentFooterWrap,
  Category,
} from 'styles/styled';
import {
  UtilPostWrap,
  UtilWrap,
  Search,
  WritingButton,
  PostWrap,
  NoPost,
  ContentWrap,
} from './styled';

export default function Board() {
  const [boardData, setBoardData] = useState<BoardData>({
    id: 0,
    name: '',
    contents: [],
    page: 0,
    pages: 0,
  });
  const { id, name, contents, page, pages } = boardData;
  const [keyword, setKeyword] = useState('');
  const currentUrl = window.location.href;
  const boardUrl = currentUrl.split('&page=')[0].split('boardId=')[1];
  const pageUrl = currentUrl.split('&page=')[1];
  const navigate = useNavigate();
  const innerScrollRef = useRef<HTMLDivElement>(null);
  const outerScrollRef = useRef<HTMLDivElement>(null);

  const { isLoading, error, data } = useQuery(
    ['board_key', boardUrl, pageUrl],
    () => {
      instance.get(`/board?boardId=${boardUrl}&page=${pageUrl}`).then((res) => {
        setBoardData(res.data);
        innerScrollRef.current?.scrollIntoView(true);
        outerScrollRef.current?.scrollIntoView(true);
      });
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

  const pageChangeHandler = (page: number) => {
    navigate(`/board?boardId=${id}&page=${page}`);
  };

  const keywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const searchHandeler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?boardId=${boardUrl}&keyword=${keyword}`);
  };

  if (error) return <Error />;

  return (
    <>
      <AppContainer ref={outerScrollRef}>
        <PageContainer>
          <TopBar>
            <PageName>
              <div onClick={() => navigate(`/board?boardId=${id}&page=1`)}>
                {name}
              </div>
            </PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <div onClick={() => navigate('/')}>&times;</div>
            </Squares>
          </TopBar>
          <ContentFooterWrap>
            <UtilPostWrap>
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
                <WritingButton>
                  <Link to={`/writing?=boardId=${id}`}>
                    <input type="button" value="글쓰기" />
                  </Link>
                </WritingButton>
              </UtilWrap>
              {isLoading ? (
                <Loading />
              ) : (
                <PostContainer>
                  <Category ref={innerScrollRef}>
                    <div></div>
                    <div>제목</div>
                    <div>조회</div>
                    <div>추천</div>
                    <div>작성일</div>
                  </Category>
                  <ContentWrap>
                    {!isLoading && contents.length ? (
                      <PostWrap>
                        {contents.map((el: PostPre, idx) => {
                          return <PostPreview key={idx} postData={el} />;
                        })}
                      </PostWrap>
                    ) : (
                      <NoPost>
                        <img src="images/ghostWithPencil.png" />
                        등록된 게시글이 없습니다.
                        <br />
                        지금 바로 새로운 게시글을 등록해 보세요!
                      </NoPost>
                    )}
                  </ContentWrap>
                  <PageNation
                    curPage={page}
                    totalPages={pages}
                    pageChangeHandler={pageChangeHandler}
                  />
                </PostContainer>
              )}
            </UtilPostWrap>
            {!isMobile && <Footer />}
          </ContentFooterWrap>
        </PageContainer>
        <Header />
      </AppContainer>
    </>
  );
}
