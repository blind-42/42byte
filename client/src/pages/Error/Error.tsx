import { Link } from 'react-router-dom';
import { AlertContainer, AlertPageWrap, TopBar, AlertPageName, Squares
				, AlertContentWrap, AlertTextWrap } from 'styles/styled'
import { ErrorImg } from './styled'

function Error() {
  return (
		<>
		<AlertContainer>
			<AlertPageWrap>
				<TopBar err={true}>
					<AlertPageName>Error!</AlertPageName>
					<Squares>
						<div>&#9866;</div>
						<div>&#10064;</div>
						<Link to='/'>
							<div>&times;</div>
						</Link>
					</Squares>
				</TopBar>
				<AlertContentWrap>
					<ErrorImg>
						<img src="/images/fire_저작권_임시.png" alt='Errorimg' />
					</ErrorImg>
					<AlertTextWrap>
						404<br />
						Failed To Load.
					</AlertTextWrap>
				</AlertContentWrap>
			</AlertPageWrap>
		</AlertContainer>
		</>
	);
}

export default Error;
