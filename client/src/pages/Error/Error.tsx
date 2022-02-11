import { TopWrap } from 'pages/Login/styled';
import { AppContainer, ErrorContainer, ErrorImg
				, TextWrap } from './styled'


function Error() {
  return (
		<>
		<AppContainer>
			<ErrorContainer>
				<TopWrap>
							<div className='decoration'>
								<div className='visibleDot'></div>
								<div className='visibleDot'></div>
								<div className='visibleDot'></div>
							</div>
							<div className='decoration'>
								<div></div>
								<div></div>
								<div></div>
							</div>
					</TopWrap>
					<ErrorImg>
						<img src="/images/fire_저작권_임시.png" alt='Errorimg' />
					</ErrorImg>
					<TextWrap>
						<div className='BiggerText'>
							ERROR
						</div>
						<div className='SmallerText'>
							404<br />
							Failed To Load.
						</div>
					</TextWrap>
			</ErrorContainer>
		</AppContainer>
		</>
	);
}

export default Error;
