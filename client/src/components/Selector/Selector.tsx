import { Link } from 'react-router-dom';
import { PageName, Squares, TopBar } from 'styles/styled'
import { AppContainer, PageContainer, ContentContainer
				, LoginImg, TextWrap, Buttons } from './styled'

function Selector() {
  return (
	<>
		<AppContainer>
		<PageContainer>
			<TopBar>
				<PageName></PageName>
				<Squares>
					<div>&#9866;</div>
					<div>&#10064;</div>
					<Link to='/'>
						<div>&times;</div>
					</Link>
				</Squares>
			</TopBar>
			<ContentContainer>
				<LoginImg>
				<img src="/images/ghost_저작권_임시.jpg" alt='Loginimg' />
				</LoginImg>
				<TextWrap>로그인이 필요합니다.</TextWrap>
				<Buttons>
					<input type="button" value="로그인" />
					<input type="button" value="취소" />
				</Buttons>
			</ContentContainer>
		</PageContainer>
	</AppContainer>
	</>
	);
}

export default Selector;
