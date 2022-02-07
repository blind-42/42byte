import Menubar from '../../components/Menubar/Menubar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListMapping from '../../components/ListMapping/ListMapping';
import PageNation from '../../components/PageNation/PageNation';
import { Link } from 'react-router-dom';
import { dummy } from './dummy';
import { AppContainer, Left, Right, MainContainer, Title
				, TableWrap, Category, TableList } from './stlyed';

function Blindboard() {
  return (
    <AppContainer>
      <Left>
        <Menubar />
      </Left>
      <Right>
        <Header />
        <MainContainer>
					<Title>
						<div className='boardName'>ꉂꉂ ( ˆᴗˆ  ) 블라인드 게시판</div>
					</Title>
					<TableWrap>
						<Category>
							<div className='left'>
								<div className='title'>제목</div>
							</div>
							<div className='right'>
								<div className='view'>조회</div>
								<div className='thumsup'>추천</div>
								<div className='writer'>글쓴이</div>
								<div className='createdat'>작성일</div>
							</div>
						</Category>
						<TableList>
							{dummy.map((list) => {
								return (
									<Link to="/post" state={{ data: list}} style={{ color: 'inherit', textDecoration: 'inherit'}}>
										<ListMapping key={list.uuid} 
																uuid={list.uuid} 
																title={list.title} 
																nickmane={list.nickname} 
																createdAt={list.createdAt} 
																comment={list.comment} 
																view={list.view} 
																thumsup={list.thumsup} 
																content={list.content} />
									</Link>
								)
							})}
						</TableList>
					</TableWrap>
					<PageNation />
				</MainContainer>
        <Footer />
      </Right>
    </AppContainer>
  );
}

export default Blindboard;