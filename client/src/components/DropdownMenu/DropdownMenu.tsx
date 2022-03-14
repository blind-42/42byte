import React, { useState } from 'react';
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import ReportModal from 'components/Modal/ReportModal';
import DeleteModal from 'components/Modal/DeleteModal';
import { DropdownWrap, Dots, DropdownBox, MenuList } from './styled';

type GreetingProps = {
  isPost: boolean;
  isUsers: boolean;
  isNotice?: boolean;
  roleType: string;
  modifyHandler: () => void;
  deleteHandler: () => void;
  reportHandler: (reportIssue: string) => void;
  noticeHandler?: () => void;
};

export default function DropdownMenu({
  isPost,
  isUsers,
  isNotice,
  roleType,
  modifyHandler,
  deleteHandler,
  reportHandler,
  noticeHandler,
}: GreetingProps) {
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openDelModal, setOpenDelModal] = useState<boolean>(false);
  const [openRptModal, setOpenRptModal] = useState<boolean>(false);

  const dropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };

  const deleteModalHandler = () => {
    setOpenDropdown(false);
    setOpenDelModal(!openDelModal);
  };

  const reportModalHandler = () => {
    setOpenDropdown(false);
    setOpenRptModal(!openRptModal);
  };

  const notice = () => {
    setOpenDropdown(false);
    if (noticeHandler) noticeHandler();
  };

  return (
    <>
      <DropdownWrap>
        {openDelModal && (
          <DeleteModal
            clickModalHandler={deleteModalHandler}
            deleteHandler={deleteHandler}
          />
        )}
        {openRptModal && (
          <ReportModal
            clickModalHandler={reportModalHandler}
            reportHandler={reportHandler}
          />
        )}
        <Dots onClick={dropdownHandler}>
          <IoEllipsisVerticalOutline />
        </Dots>
        {openDropdown && (
          <DropdownBox>
            {isUsers ? (
              <MenuList>
                <div onClick={modifyHandler}>수정</div>
                <div onClick={deleteModalHandler}>삭제</div>
                {isPost && roleType === 'ADMIN' && (
                  <div onClick={notice}>
                    {isNotice ? '공지 내리기' : '공지'}
                  </div>
                )}
              </MenuList>
            ) : (
              <MenuList>
                <div onClick={reportModalHandler}>신고</div>
                {roleType === 'ADMIN' && (
                  <div onClick={deleteModalHandler}>삭제</div>
                )}
                {isPost && roleType === 'ADMIN' && (
                  <div onClick={notice}>
                    {isNotice ? '공지 내리기' : '공지'}
                  </div>
                )}
              </MenuList>
            )}
          </DropdownBox>
        )}
      </DropdownWrap>
    </>
  );
}
