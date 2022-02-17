import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Postpreview from 'components/Postpreview/Postpreview';
import PageNation from 'components/PageNation/PageNation';
import instance from 'utils/functions/axios';
import { AppContainer, PageContainer, TopBar, PageName, Squares, Category } from 'styles/styled';
import { PostContainer, PostWrap, ContentWrap } from './styled';
import { BoardData, ContentData} from 'utils/functions/type';

function Blindboard() {
	const [boardData, setBoardData] = useState<BoardData>({
		contents: [
			{	id: 0,
				authorId: 0,
				title: '',
				commentCnt: 0,
				viewCnt: 0,
				likeCnt: 0,
				isNotice: false,
				blameCnt: 0,
				createdDate: '',
				modifiedDate: ''
			}
		], 
		page: 0, 
		pages: 0
	});
	const [curPage, setCurPage] = useState<number>(0);
	// const [isLoading, setIsLoading] = useState(true);
	// const [currentMenu, setCurrentMenu] = useState(-1);
	const currentUrl = window.location.href;
	const urlId = currentUrl.split('blindboard?page=')[1];
	
	const {page, pages} = boardData

	useEffect(() => {
		instance
		.get(`/board?boardId=1&page=${urlId}`)
		.then((res) => {setBoardData(res.data)})
		.catch((err) => console.log(err));
	}, [])

	// const postData = boardData.contents;
	// const pageData = {page: boardData.page, pages: boardData.pages};

	const pageChangeHandler = (page: number) => {
		window.location.href = `/blindboard?page=${page}`
		// setCurPage(page)
  };

	return (
		<>
			<AppContainer>
				<Header />
				<PageContainer>
					<TopBar>
						<PageName>ꉂꉂ ( ˆᴗˆ  ) 블라인드 게시판</PageName>
						<Squares>
							<div>&#9866;</div>
							<div>&#10064;</div>
							<Link to='/'>
								<div>&times;</div>
							</Link>
						</Squares>
					</TopBar>
					<PostContainer>
						<Category>
							<div>제목</div>
							<div>조회</div>
							<div>추천</div>
							<div>작성일</div>
						</Category>
						<ContentWrap>
							<PostWrap>
								{boardData.contents.map((el: ContentData, idx) => {
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
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Blindboard;