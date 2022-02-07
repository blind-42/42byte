import { AppContainer, LoginContainer, TopWrap, SeoulImg
				, TextWrap, ButtonWrap } from './styled';

function Login() {

	return (
		<>
		<AppContainer>
			<LoginContainer>
				<TopWrap>
					<div className='xIcon'>&times;</div>
				</TopWrap>
				<SeoulImg>
					<img src="/images/logo42.png" alt='42img' />
				</SeoulImg>
				<TextWrap>
					<div className='BiggerText'>Born to Code?</div>
					<div className='SmallerText'>
					42seoul 카뎃만 참여할 수 있습니다.<br/>
					계정이 존재하는 지 확인해주세요.
					</div>
				</TextWrap>
				<ButtonWrap>
					<input type="button" value="로그인" />
				</ButtonWrap>
			</LoginContainer>
		</AppContainer>
		</>
	);
}

export default Login;