import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
	// const [postData, setPostData] = useState<ContentData>({
	// 	id: 0,
	// 	authorId: 0,
	// 	title: '',
	// 	commentCnt: 0,
	// 	viewCnt: 0,
	// 	likeCnt: 0,
	// 	isNotice: false,
	// 	blameCnt: 0,
	// 	createdDate: '',
	// 	modifiedDate: ''
	// });
	const [curPage, setCurPage] = useState<number>(1);
	const [isLoading, setIsLoading] = useState(true);
	const [currentMenu, setCurrentMenu] = useState(-1);

	useEffect(() => {
		instance
		.get('/board?boardId=1')
		.then((res) => { setBoardData(res.data) })
		.catch((err) => console.log(err));
	}, [])

	// const postData = boardData.contents;
	// const pageData = {page: boardData.page, pages: boardData.pages};

	const pageChangeHandler = (page: number) => {
    setCurPage(page);
    setIsLoading(true);
    if (currentMenu === -1) {
      instance
        .get<BoardData>('/board?boardId=1', { params: { pageNumber: page } })
        .then((res) => {
          setBoardData(res.data)
          setIsLoading(false);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
          } else window.location.assign('/error');
        });
    } else {
      setIsLoading(false);
    }
  };
	console.log(boardData);

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
							curPage={curPage}
							totalPages={boardData.pages}
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