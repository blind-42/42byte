import React, { useState, useRef } from 'react';
import { useQuery, useQueryClient, useMutation } from 'react-query';
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
  ContentWrap,
  NoPost,
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
  const [keyword, setKeyword] = useState(
    decodeURI(window.location.search.split('keyword=')[1].split('&page=')[0]),
  );
  const [success, setSuccess] = useState(false);
  const boardUrl = window.location.search.split('&')[0].split('=')[1];
  const pageUrl = window.location.search.split('&page=')[1];
  const navigate = useNavigate();
  const innerScrollRef = useRef<HTMLDivElement>(null);
  const outerScrollRef = useRef<HTMLDivElement>(null);

  const mutationSearchData = useMutation(({ path }: { path: string }) =>
    instance.get(path),
  );

  const { isLoading, error, data } = useQuery(
    ['search_key', boardUrl, pageUrl],
    () => {
      instance
        .get(
          `/board/search?boardId=${boardUrl}&keyword=${keyword}&page=${pageUrl}`,
        )
        .then((res) => {
          setBoardData(res.data);
          innerScrollRef.current?.scrollIntoView(true);
          outerScrollRef.current?.scrollIntoView(true);
          return setSuccess(true);
        });
    },
    {
      retry: 0,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  );

  const pageChangeHandler = (page: number) => {
    navigate(`/search?boardId=${id}&keyword=${keyword}&page=${page}`);
  };

  const keywordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const searchHandeler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?boardId=${boardUrl}&keyword=${keyword}`);
    mutationSearchData.mutate(
      { path: `/board/search?boardId=${boardUrl}&keyword=${keyword}` },
      {
        onSuccess: (res) => {
          setBoardData(res.data);
        },
      },
    );
  };

  if (error) return <Error />;

  return (
    <>
      <AppContainer ref={outerScrollRef}>
        <PageContainer>
          <TopBar>
            <PageName>{name}</PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <div onClick={() => navigate(-1)}>&times;</div>
            </Squares>
          </TopBar>
          <ContentFooterWrap>
            <UtilPostWrap>
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
                    {success && !contents.length ? (
                      <NoPost>
                        <img src="images/ghostWithPencil.png" />
                        검색 결과가 없습니다.
                      </NoPost>
                    ) : (
                      <PostWrap>
                        {contents.map((el: PostPre, idx) => {
                          return <PostPreview key={idx} postData={el} />;
                        })}
                      </PostWrap>
                    )}
                  </ContentWrap>

                  <PageNation
                    curPage={page}
                    totalPages={pages}
                    pageChangeHandler={pageChangeHandler}
                  />
                </PostContainer>
              )}
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
                  <Link to={`/writing?boardId=${id}`}>
                    <input type="button" value="글쓰기" />
                  </Link>
                </WritingButton>
              </UtilWrap>
            </UtilPostWrap>
            <Footer />
          </ContentFooterWrap>
        </PageContainer>
        <Header />
      </AppContainer>
    </>
  );
}
