import { Link } from 'react-router-dom';
import {
  AlertPageWrap,
  TopBar,
  AlertPageName,
  Squares,
  AlertContentWrap,
  AlertTextWrap,
} from 'styles/styled';
import { LoadingModalBackdrop, LoadingBar } from './styled';

function Loading() {
  return (
    <>
      <LoadingModalBackdrop>
        <AlertPageWrap>
          <TopBar>
            <AlertPageName>Loading...</AlertPageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <Link to="/">
                <div>&times;</div>
              </Link>
            </Squares>
          </TopBar>
          <AlertContentWrap>
            <LoadingBar>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div className="last"></div>
              <div className="last"></div>
              <div className="last"></div>
            </LoadingBar>
            <AlertTextWrap>Loading ...</AlertTextWrap>
          </AlertContentWrap>
        </AlertPageWrap>
      </LoadingModalBackdrop>
    </>
  );
}

export default Loading;
