import { Link } from 'react-router-dom';
import { PageName, Squares, TopBar } from 'styles/styled';
import {
  ModalBackdrop,
  ModalContainer,
  ContentContainer,
  ModalImg,
  TextWrap,
  Buttons,
} from './styled';

type Props = {
  openLoginModalHandler: () => void;
};

function LoginModal({ openLoginModalHandler }: Props) {
  return (
    <>
      <ModalBackdrop onClick={openLoginModalHandler}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <TopBar>
            <PageName></PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <div onClick={openLoginModalHandler}>&times;</div>
            </Squares>
          </TopBar>
          <ContentContainer>
            <ModalImg>
              <img src="/images/ghost.png" alt="Loginimg" />
            </ModalImg>
            <TextWrap>로그인이 필요합니다.</TextWrap>
            <Buttons>
              <Link to="/login">
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
