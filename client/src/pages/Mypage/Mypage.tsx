import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useMediaQuery } from 'react-responsive';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNation from 'components/PageNation/PageNation';
import PostPreview from 'components/Postpreview/Postpreview';
import CommentPreview from 'components/CommentPreview/CommentPreview';
import Loading from 'components/Modal/Loading';
import Error from 'pages/Error/Error';
import instance from 'utils/functions/axios';
import { PostPre, CommentPre } from 'utils/functions/type';
import {
  AppContainer,
  PageContainer,
  TopBar,
  PageName,
  Squares,
  PostContainer,
  ContentFooterWrap,
} from 'styles/styled';
import {
  MenuWrap,
  LikeMenu,
  PostMenu,
  CommentMenu,
  MenuPostWrap,
  Category,
  ContentWrap,
  PostWrap,
} from './styled';

export default function Mypage() {
  const [mypageData, setMypageData] = useState({
    contents: [],
    page: 0,
    pages: 0,
  });
  const { contents, page, pages } = mypageData;
  const currentUrl = window.location.href;
  const pageName = currentUrl.split('&page=')[0].split('mypage?=')[1];
  const pageNumber = currentUrl.split('&page=')[1];
  const navigate = useNavigate();
  const innerScrollRef = useRef<HTMLDivElement>(null);
  const outerScrollRef = useRef<HTMLDivElement>(null);

  const { isLoading, error, data } = useQuery(
    ['mypage_key', pageName, pageNumber],
    () => {
      instance.get(`/mypage/${pageName}?page=${pageNumber}`).then((res) => {
        setMypageData(res.data);
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

  const switchToMenu = (menu: string) => {
    navigate(`/mypage?=${menu}&page=1`);
  };

  const pageChangeHandler = (page: number) => {
    navigate(`/mypage?=${pageName}&page=${page}`);
  };

  if (error) return <Error />;

  return (
    <>
      <AppContainer ref={outerScrollRef}>
        <PageContainer>
          <TopBar>
            <PageName>
              <div onClick={() => navigate('/mypage?=post&page=1')}>
                ???????????????
              </div>
            </PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <div onClick={() => navigate('/')}>&times;</div>
            </Squares>
          </TopBar>
          <ContentFooterWrap>
            <MenuPostWrap>
              <MenuWrap>
                <PostMenu state={pageName}>
                  <button onClick={() => switchToMenu('post')}>
                    <img src="images/my_post.png" alt="postimg" />
                    <div>?????? ??? ???</div>
                  </button>
                </PostMenu>
                <CommentMenu state={pageName}>
                  <button onClick={() => switchToMenu('comment')}>
                    <img src="images/my_cmt.png" alt="cmtimg" />
                    <div>?????? ??? ??????</div>
                  </button>
                </CommentMenu>
                <LikeMenu state={pageName}>
                  <button onClick={() => switchToMenu('post/like')}>
                    <img src="images/my_like.png" alt="likeimg" />
                    <div>???????????? ???</div>
                  </button>
                </LikeMenu>
              </MenuWrap>
              {isLoading ? (
                <Loading />
              ) : (
                <PostContainer>
                  {pageName !== 'comment' ? (
                    <Category state={pageName} ref={innerScrollRef}>
                      <div></div>
                      <div>??????</div>
                      <div>??????</div>
                      <div>??????</div>
                      <div>?????????</div>
                    </Category>
                  ) : (
                    <Category state={pageName} ref={innerScrollRef}>
                      <div>??????</div>
                    </Category>
                  )}
                  <ContentWrap>
                    <PostWrap>
                      {pageName !== 'comment'
                        ? contents.map((el: PostPre, idx) => {
                            return <PostPreview key={idx} postData={el} />;
                          })
                        : contents.map((el: CommentPre, idx) => {
                            return (
                              el.content && (
                                <CommentPreview key={idx} commentData={el} />
                              )
                            );
                          })}
                    </PostWrap>
                  </ContentWrap>
                  <PageNation
                    curPage={page}
                    totalPages={pages}
                    pageChangeHandler={pageChangeHandler}
                  />
                </PostContainer>
              )}
            </MenuPostWrap>
            {!isMobile && <Footer />}
          </ContentFooterWrap>
        </PageContainer>
        <Header />
      </AppContainer>
    </>
  );
}
