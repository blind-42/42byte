import Menubar from '../../components/Menubar/Menubar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Table from '../../components/Table/Table';
import PageNation from '../../components/PageNation/PageNation';
import { AppContainer, Left, Right, MainContainer, Title } from './stlyed';

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
						<select className='listSort' name='정렬'>
							<option value='최신순' selected>최신순</option>
							<option value='최신순'>좋아요순</option>
							<option value='최신순'>댓글수순</option>
							<option value='최신순'>조회수순</option>
						</select>
					</Title>
					<Table />
					<PageNation />
				</MainContainer>
        <Footer />
      </Right>
    </AppContainer>
  );
}

export default Blindboard;
