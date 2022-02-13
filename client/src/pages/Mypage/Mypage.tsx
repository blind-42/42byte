import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { AppContainer, PageContainer, TopBar, PageName, Squares } from '../../styles/styled'
import { ContentContainer, MenuWrap, MypageMenu, ContentWrap, Category, ContentPreview } from './styled'

function Mypage() {
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
							<div>&times;</div>
						</Squares>
					</TopBar>
					<ContentContainer>
						<MenuWrap>
							<div>내가 쓴 글</div>
							<div>내가 쓴 댓글</div>
						</MenuWrap>
						<ContentWrap>
							<Category>
								<div>제목</div>
								<div>조회</div>
								<div>추천</div>
								<div>작성일</div>
							</Category>
							<ContentPreview>
							</ContentPreview>
						</ContentWrap>
					</ContentContainer>
					<Footer />
				</PageContainer>
			</AppContainer>
		</>
	);
}

export default Mypage;