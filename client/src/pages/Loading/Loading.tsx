import { Link } from 'react-router-dom';
import { AlertContainer, AlertPageWrap, TopBar, AlertPageName, Squares
				, AlertContentWrap, AlertTextWrap } from 'styles/styled'
import { LogoImg, LoadingBar } from './styled'


function Loading() {

  return (
		<>
		<AlertContainer>
			<AlertPageWrap>
				<TopBar>
					<AlertPageName>Loading...</AlertPageName>
					<Squares>
						<div>&#9866;</div>
						<div>&#10064;</div>
						<Link to='/'>
							<div>&times;</div>
						</Link>
					</Squares>
				</TopBar>
				<AlertContentWrap>
					<LogoImg>
						<img src="" alt='Logoimg' />
					</LogoImg>
					<LoadingBar>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</LoadingBar>
					<AlertTextWrap>
						Loading . . .
					</AlertTextWrap>
				</AlertContentWrap>
			</AlertPageWrap>
		</AlertContainer>
		</>
	);
}

export default Loading;
