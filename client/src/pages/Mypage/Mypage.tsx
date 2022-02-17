import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PageNation from 'components/PageNation/PageNation';
import Postpreview from 'components/Postpreview/Postpreview';
import { AppContainer, PageContainer, TopBar, PageName, Squares, Category } from '../../styles/styled'
import { ContentContainer, MenuWrap, PostMenu, CommentMenu, PostContainer, ContentWrap, PostWrap } from './styled'
import instance from 'utils/functions/axios';
import { BoardData, ContentData} from 'utils/functions/type';

function Mypage() {
	const [boardData, setBoardData] = useState({contents: [], page: 0, pages: 0});
	const [pageName, setPageName] = useState<string>('post');
	const {page, pages} = boardData;
	const myPost = boardData.contents;
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('page=')[1];

	const switchToComment = () => {
		setPageName('comment');
		instance
		.get('/mypage/comment?page=1')
		.then((res) => {
			setBoardData(res.data);
		})
		.catch((err) => {
			window.location.href = '/error';
		})
	}

	const switchToPost = () => {
		setPageName('post');
		instance
		.get('/mypage/post?page=1')
		.then((res) => {
			setBoardData(res.data);
		})
		.catch((err) => {
			window.location.href = '/error';
		})
	}

	useEffect(() => {
		instance
		.get(`/mypage/post?page=${urlId}`)
		.then((res) => { setBoardData(res.data) })
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
							<Category>
								<div>제목</div>
								<div>조회</div>
								<div>추천</div>
								<div>작성일</div>
							</Category>
							<ContentWrap>
								<PostWrap>
									{myPost.map((el: ContentData, idx) => {
										return (<Postpreview key={idx} content={el} />)
									})}
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