import Menubar from 'components/Menubar/Menubar';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { AppContainer, Left, Right, MainContainer
				, PostWrap, Title, Detail, ContentWrap, LikesButton } from './styled'

function Post() {
  return (
		<AppContainer>
      <Left>
        {/* <Menubar /> */}
      </Left>
      <Right>
        <Header />
        <MainContainer>
					<PostWrap>
						<Title>
							<div>여기가 제목입니다.</div>
						</Title>
						<Detail>
							<div className='left'>
								<div>카뎃</div>
								<div>2021-11-21 15:25:31</div>
								<div>조회 56</div>
							</div>
							<div className='right'>
								<div>수정</div>
								<div>삭제</div>
							</div>
						</Detail>
						<ContentWrap>
							<div>레너드 혜성의 정식 명칭은 C/2021 A ...</div>
						</ContentWrap>
						{/* <LikesButton>

							<div className='likesCount'>27</div>
						</LikesButton> */}
					</PostWrap>
				</MainContainer>
			</Right>
			<Footer />
		</AppContainer>
	);
}

export default Post;