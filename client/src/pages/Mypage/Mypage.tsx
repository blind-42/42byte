import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNation from 'components/PageNation/PageNation';
import PostPreview from 'components/Postpreview/Postpreview';
import CommentPreview from 'components/CommentPreview/CommentPreview';
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import { AppContainer, PageContainer, TopBar, PageName, Squares, PostContainer, ContentFooterWrap } from '../../styles/styled'
import { MenuWrap, PostMenu, CommentMenu, MenuPostWrap, Category, ContentWrap, PostWrap } from './styled'
import instance from 'utils/functions/axios';
import { BoardData, ContentData, CommentPreData } from 'utils/functions/type';
import { useNavigate } from "react-router-dom";

export default function Mypage() {
	const [postBoardData, setPostBoardData] = useState({contents: [], page: 0, pages: 0});
	const [commentBoardData, setCommentBoardData] = useState({contents: [], page: 0, pages: 0});
	const [pageName, setPageName] = useState<string>('post');
	const [currentPageNumber, setCurrentPageNumber] = useState({page: 1, pages: 1})
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('page=')[1];
	const navigate = useNavigate();

	const { isLoading, error, data  } = useQuery(['mypage_key', urlId, pageName, navigate], 
		() => {
			console.log(pageName)
			instance.get(`/mypage/${pageName}?page=${urlId}`)
			.then((res) => {
				setCurrentPageNumber({page: res.data.page, pages: res.data.pages});
				if (pageName === "post")
					setPostBoardData(res.data);
				else
					setCommentBoardData(res.data);
			})},
			{ retry: 0,
				keepPreviousData: true});

	// useEffect(() => {
	// 	const currentPageName = window.location.search.split('&')[0].slice(2)
	// 	setPageName(currentPageName)
	// 	if (currentPageName === "post") {
	// 		instance
	// 		.get(`/mypage/${currentPageName}?page=${urlId}`)
	// 		.then((res) => {
	// 			setCurrentPageNumber({page: res.data.page, pages: res.data.pages})
	// 			setPostBoardData(res.data)
	// 		})
	// 		.catch((err) => { window.location.href = '/error'; });
	// 	}
	// 	else {
	// 		instance
	// 		.get(`/mypage/comment?page=${urlId}`)
	// 		.then((res) => {
	// 			setCurrentPageNumber({page: res.data.page, pages: res.data.pages})
	// 			setCommentBoardData(res.data);
	// 		})
	// 		.catch((err) => { window.location.href = '/error'; })
	// 	}
	// }, [window.location.href])

	const switchToComment = () => {
		setPageName('comment')
		navigate('/mypage?=comment&page=1')
	}

	const switchToPost = () => {
		setPageName('post')
		navigate('/mypage?=post&page=1')
	}
	
	const pageChangeHandler = (page: number) => {
		navigate(`/mypage?=${pageName}&page=${page}`)
  };

	if (isLoading) return <Loading />

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
											?	postBoardData.contents.map((el: ContentData, idx) => {
												return (<PostPreview key={idx} postData={el} />)
											})
											:	commentBoardData.contents.map((el: CommentPreData, idx) => {
												return (el.content && <CommentPreview key={idx} commentData={el} />)
											})
										}
									</PostWrap>
								</ContentWrap>
								<PageNation 
									curPage={currentPageNumber.page}
									totalPages={currentPageNumber.pages}
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
