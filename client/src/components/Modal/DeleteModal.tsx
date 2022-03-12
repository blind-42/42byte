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
  clickModalHandler: () => void;
  deleteHandler: () => void;
};

function DeleteModal({ clickModalHandler, deleteHandler }: Props) {
  return (
    <>
      <ModalBackdrop onClick={clickModalHandler}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <TopBar>
            <PageName></PageName>
            <Squares>
              <div>&#9866;</div>
              <div>&#10064;</div>
              <div onClick={clickModalHandler}>&times;</div>
            </Squares>
          </TopBar>
          <ContentContainer>
            <ModalImg>
              <img src="/images/delete!.png" alt="Deleteimg" />
            </ModalImg>
            <TextWrap>정말 삭제하시겠습니까?</TextWrap>
            <Buttons>
              {/* 클릭시 삭제 구현 */}
              <input type="button" value="삭제" onClick={deleteHandler} />
              <input
                type="button"
                className="cancel"
                onClick={clickModalHandler}
                value="취소"
              />
            </Buttons>
          </ContentContainer>
        </ModalContainer>
      </ModalBackdrop>
    </>
  );
}

export default DeleteModal;
