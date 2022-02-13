import { Link } from 'react-router-dom';
import { PageName, Squares } from 'styles/styled'
import { AppContainer, PageContainer, TopBar, ContentContainer
				, ErrorImg, TextWrap } from './styled'


function Error() {
  return (
		<>
		<AppContainer>
			<PageContainer>
				<TopBar>
					<PageName>Error!</PageName>
					<Squares>
						<div>&#9866;</div>
						<div>&#10064;</div>
						<Link to='/'>
							<div>&times;</div>
						</Link>
					</Squares>
				</TopBar>
				<ContentContainer>
					<ErrorImg>
						<img src="/images/fire_저작권_임시.png" alt='Errorimg' />
					</ErrorImg>
					<TextWrap>
						404<br />
						Failed To Load.
					</TextWrap>
				</ContentContainer>
			</PageContainer>
		</AppContainer>
		</>
	);
}

export default Error;
