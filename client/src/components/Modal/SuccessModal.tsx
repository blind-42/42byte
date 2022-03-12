import { PageName, Squares, TopBar } from 'styles/styled';
import {
  ModalBackdrop,
  ModalContainer,
  ContentContainer,
  Buttons,
  TextWrap,
} from './styled';

type GreetingProps = {
  subject: string;
  urlId: string;
};

export default function SuccessModal({ subject, urlId }: GreetingProps) {
  const redirect = () => {
    window.location.href = urlId;
  };

  return (
    <>
      <ModalBackdrop onClick={redirect}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <TopBar>
            <PageName></PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <div onClick={redirect}>&times;</div>
            </Squares>
          </TopBar>
          <ContentContainer>
            <TextWrap>{subject}가 정상적으로 처리되었습니다.</TextWrap>
            <Buttons>
              <input type="button" value="확인" onClick={redirect} />
            </Buttons>
          </ContentContainer>
        </ModalContainer>
      </ModalBackdrop>
    </>
  );
}
