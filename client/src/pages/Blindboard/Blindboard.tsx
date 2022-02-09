import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
//import Postpreview from '../../components/Postpreview/Postpreview';
import PageNation from '../../components/PageNation/PageNation';
import { Link } from 'react-router-dom';
// import { dummy } from './dummy';
//import { AppContainer, MainContainer, Title, TableWrap, Category, TableList } from './styled';
import { PostDB } from 'utils/functions/type'
import { useState, useEffect } from 'react';
import instance from 'utils/functions/axios';
import { AppContainer, MainContainer, BoardNameWrap, PostList, Category } from './styled'


function Blindboard() {
	const [postData, setPostData] = useState([]);
	useEffect(() => {
    instance
      .get('/postings')
      .then((res) => setPostData(res.data))
      .catch((err) => console.log(err));
  }, []);
	
	return (
		<>
			<AppContainer>
				<Header />
				<MainContainer>
					<BoardNameWrap>
						<h2>ꉂꉂ ( ˆᴗˆ  ) 블라인드 게시판</h2>
					</BoardNameWrap>
					<PostList>
						<Category>
							<div className='title'>제목</div>
							<div>조회</div>
							<div>추천</div>
							<div>글쓴이</div>
							<div>작성일</div>
						</Category>
					{postData.map((el) => {
						console.log(el);
					})}
					</PostList>
				</MainContainer>
				<Footer />
			</AppContainer>
		</>
	);
  // return (
  //   <AppContainer>
  //     <Header />
	// 		<MainContainer>
	// 			<Title>
	// 				<div className='boardName'>ꉂꉂ ( ˆᴗˆ  ) 블라인드 게시판</div>
	// 			</Title>
	// 			<TableWrap>
	// 				<Category>
	// 					<div className='left'>
	// 						<div className='title'>제목</div>
	// 					</div>
	// 					<div className='right'>
	// 						<div className='view'>조회</div>
	// 						<div className='thumsup'>추천</div>
	// 						<div className='writer'>글쓴이</div>
	// 						<div className='createdat'>작성일</div>
	// 					</div>
	// 				</Category>
	// 				<TableList>
	// 					{dummy.map((list) => {
	// 						return (
	// 							<Link to="/post" state={{ data: list}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
	// 								<Postpreview key={list.uuid} 
	// 														uuid={list.uuid} 
	// 														title={list.title} 
	// 														nickmane={list.nickname} 
	// 														createdAt={list.createdAt} 
	// 														comment={list.comment} 
	// 														view={list.view} 
	// 														thumsup={list.thumsup} 
	// 														content={list.content} />
	// 							</Link>
	// 						)
	// 					})}
	// 				</TableList>
	// 			</TableWrap>
	// 			<PageNation />
	// 		</MainContainer>
  //       <Footer />
  //   </AppContainer>
  // );
}

export default Blindboard;