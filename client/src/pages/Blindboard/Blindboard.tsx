import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Postpreview from 'components/Postpreview/Postpreview';
import PageNation from '../../components/PageNation/PageNation';
import instance from 'utils/functions/axios';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from '../../styles/styled'
import { PostContainer, Category, PostWrap } from './styled'
//import { AppContainer, MainContainer, Title, TableWrap, Category, TableList } from './styled';

export interface BoardData {
  contents: ContentData[]
  page: number
  pages: number
}

export interface ContentData {
  id: number
  authorId: number
  title: string
  commentCnt: number
  viewCnt: number
  likeCnt: number
  isNotice: boolean
  blameCnt: number
  createdDate: string
  modifiedDate: string
}

function Blindboard() {
	const [postData, setPostData] = useState([]);
	useEffect(() => {
		instance
		.get('/board?boardId=1')
		.then((res) => setPostData(res.data.contents))
		.catch((err) => console.log(err));
	}, [])

	const [page, setPage] = useState([]);

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
								<div>&times;</div>
							</Squares>
						</TopBar>
					<PostContainer>
						<Category>
							<div>제목</div>
							<div>조회</div>
							<div>추천</div>
							<div>작성일</div>
						</Category>
						<PostWrap>
							{postData.map((el: ContentData, idx) => {
								return (<Postpreview key={idx} content={el} />)
							})}
						</PostWrap>
					</PostContainer>
					<PageNation />
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Blindboard;