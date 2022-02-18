import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNation from 'components/PageNation/PageNation';
import PostPreview from 'components/Postpreview/Postpreview';
import CommentPreview from 'components/CommentPreview/CommentPreview';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from '../../styles/styled'
import { ContentContainer, MenuWrap, PostMenu, CommentMenu, PostContainer, Category, ContentWrap, PostWrap } from './styled'
import instance from 'utils/functions/axios';
import { BoardData, ContentData} from 'utils/functions/type';

export interface CommentBoardData {
  contents: CommentData[]
  page: number
  pages: number
}

export interface CommentData {
  id: number
  boardId: number
  postId: number
  authorId: number
  content: string
	commentCnt: number
  likeCnt: number
  blameCnt: number
  isAuthor: boolean
  isDel: boolean
	title: string
  createdDate: string
  modifiedDate: string
}

function Mypage() {
	const [postBoardData, setPostBoardData] = useState({contents: [], page: 0, pages: 0});
	const [commentBoardData, setCommentBoardData] = useState({contents: [], page: 0, pages: 0});
	const [pageName, setPageName] = useState<string>('post');
	const {page, pages} = postBoardData;
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('page=')[1];

	const switchToComment = () => {
		setPageName('comment');
		instance
		.get('/mypage/comment?page=1')
		.then((res) => {
			setCommentBoardData(res.data);
		})
		.catch((err) => {
			console.log(err);
			// window.location.href = '/error';
		})
	}

	const switchToPost = () => {
		setPageName('post');
		instance
		.get('/mypage/post?page=1')
		.then((res) => {
			setPostBoardData(res.data);
		})
		.catch((err) => {
			window.location.href = '/error';
		})
	}

	useEffect(() => {
		instance
		.get(`/mypage/post?page=${urlId}`)
		.then((res) => { setPostBoardData(res.data) })
		.catch((err) => console.log(err));
	}, [])

	const pageChangeHandler = (page: number) => {
		window.location.href = `/mypage/${pageName}?page=${page}`
  };

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
					<ContentContainer>
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
										:	commentBoardData.contents.map((el: CommentData, idx) => {
											return (<CommentPreview key={idx} commentData={el} />)
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
					</ContentContainer>
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Mypage;