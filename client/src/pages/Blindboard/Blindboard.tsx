import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Postpreview from 'components/Postpreview/Postpreview';
import PageNation from 'components/PageNation/PageNation';
import instance from 'utils/functions/axios';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from 'styles/styled';
import { PostContainer, Category, PostWrap, ContentWrap } from './styled';
import { BoardData, ContentData} from 'utils/functions/type';

function Blindboard() {

	const [boardData, setBoardData] = useState({contents: [], page: 0, pages: 0});

	useEffect(() => {
		instance
		.get('/board?boardId=1')
		.then((res) => { setBoardData(res.data) })
		.catch((err) => console.log(err));
	}, [])

	const postData = boardData.contents;
	const pageData = {page: boardData.page, pages: boardData.pages};

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
							{postData.map((el: ContentData, idx) => {
								return (<Postpreview key={idx} content={el} />)
							})}
						</PostWrap>
						<PageNation pageData={pageData}/>
						</ContentWrap>
					</PostContainer>
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Blindboard;