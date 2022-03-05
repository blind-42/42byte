import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNation from 'components/PageNation/PageNation';
import PostPreview from 'components/Postpreview/Postpreview';
import CommentPreview from 'components/CommentPreview/CommentPreview';
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import instance from 'utils/functions/axios';
import { PostPre, CommentPre } from 'utils/functions/type';
import { AppContainer, PageContainer, TopBar, PageName, Squares, PostContainer, ContentFooterWrap } from '../../styles/styled'
import { MenuWrap, PostMenu, CommentMenu, MenuPostWrap, Category, ContentWrap, PostWrap } from './styled'

export default function Mypage() {
	const [mypageData, setMypageData] = useState({contents: [], page: 0, pages: 0});
	const { contents, page, pages } = mypageData;
	const currentUrl = window.location.href;
	const pageName = currentUrl.split('&page=')[0].split('mypage?=')[1];
	const pageNumber = currentUrl.split('&page=')[1];
	const navigate = useNavigate();

	const { error, data  } = useQuery(['mypage_key', pageName, pageNumber], 
		() => {
			instance
			.get(`/mypage/${pageName}?page=${pageNumber}`)
			.then((res) =>  setMypageData(res.data) )
		}, { 
			retry: 0,
			refetchOnWindowFocus: false,
			keepPreviousData: true
		});

	const switchToComment = () => {
		navigate('/mypage?=comment&page=1')
	}

	const switchToPost = () => {
		navigate('/mypage?=post&page=1')
	}
	
	const pageChangeHandler = (page: number) => {
		navigate(`/mypage?=${pageName}&page=${page}`)
  };

	if (error) return <Error />

	return (
		<>
			<AppContainer>
				<Header />
				<PageContainer>
					<TopBar>
						<PageName>마이페이지</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to='/'>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<ContentFooterWrap>
						<MenuPostWrap>
							<MenuWrap>
								<PostMenu state={pageName}>
									<button onClick={switchToPost}>내가 쓴 글</button>
								</PostMenu>
								<CommentMenu state={pageName}>
									<button onClick={switchToComment}>내가 쓴 댓글</button>
								</CommentMenu>
							</MenuWrap>
							<PostContainer>
								{pageName === 'post'
									?	<Category state={pageName}>
											<div></div>
											<div>제목</div>
											<div>조회</div>
											<div>추천</div>
											<div>작성일</div>
										</Category>
									: <Category state={pageName}>
											<div>댓글</div>
										</Category>
									}
									<ContentWrap>
									<PostWrap>
										{pageName === 'post'
											?	contents.map((el: PostPre, idx) => {
												return (<PostPreview key={idx} postData={el} />)
											})
											: contents.map((el: CommentPre, idx) => {
												return (el.content && <CommentPreview key={idx} commentData={el} />)
											})
										}
									</PostWrap>
								</ContentWrap>
								<PageNation 
									curPage={page}
									totalPages={pages}
									pageChangeHandler={pageChangeHandler}
								/>
							</PostContainer>
						</MenuPostWrap>
						<Footer />
					</ContentFooterWrap>
				</PageContainer>
			</AppContainer>
		</>
	);
}
