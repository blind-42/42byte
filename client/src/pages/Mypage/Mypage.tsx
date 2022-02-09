import { AppContainer, ContentContainer, ContentPreview, ContentWrap, MenuWrap, MypageContainer, TopBar } from './styled'
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function Mypage() {
	return (
		<>
			<AppContainer>
				<Header />
				<MypageContainer>
					<TopBar>
						<div className='decoration'>
							<div className='visibleDot'></div>
							<div className='visibleDot'></div>
							<div className='visibleDot'></div>
						</div>
						<div className='header'>마이페이지</div>
						<div className='decoration'>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</TopBar>
					<ContentContainer>
						<MenuWrap>
							<div className='mypageMenu'>
								<img src='' alt='img' />
								<div>내가 쓴 글</div>
							</div>
							<div className='mypageMenu'>
								<img src='' alt='img' />
								<div>내가 쓴 댓글</div>
							</div>
						</MenuWrap>
						<ContentWrap>
							<div className='category'>
								<div className='title'>제목</div>
								<div>조회</div>
								<div>추천</div>
								<div>글쓴이</div>
								<div>작성일</div>
							</div>
							<ContentPreview>
							</ContentPreview>
						</ContentWrap>
					</ContentContainer>
				</MypageContainer>
				<Footer />
			</AppContainer>
		</>
	);
}

export default Mypage;