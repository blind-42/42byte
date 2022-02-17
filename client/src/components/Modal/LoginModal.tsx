import { Link } from 'react-router-dom';
import { PageName, Squares, TopBar } from 'styles/styled'
import { ModalBackdrop, ModalContainer, ContentContainer
				, LoginImg, TextWrap, Buttons } from './styled'

function LoginModal() {
  return (
	<>
	<ModalBackdrop>
		<ModalContainer>
			<TopBar>
				<PageName></PageName>
				<Squares>
					<div>&#9866;</div>
					<div>&#10064;</div>
					{/* 클릭시 모달 없어지는 액션 상태 바꿔주기*/}
					<div>&times;</div>
				</Squares>
			</TopBar>
			<ContentContainer>
				<LoginImg>
				<img src="/images/ghost_저작권_임시.jpg" alt='Loginimg' />
				</LoginImg>
				<TextWrap>로그인이 필요합니다.</TextWrap>
				<Buttons>
					<Link to='/login'>
					<input type="button" value="로그인하기" />
					</Link>
				</Buttons>
			</ContentContainer>
		</ModalContainer>
	</ModalBackdrop>
	</>
	);
}

export default LoginModal;
