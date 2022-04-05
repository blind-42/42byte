import { useState, useEffect } from 'react';
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import ReportModal from 'components/Modal/ReportModal';
import DeleteModal from 'components/Modal/DeleteModal';
import { DropdownWrap, HamburgerButton, DropdownBox, MenuList } from './styled';

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
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [openReportModal, setOpenReportModal] = useState<boolean>(false);

  useEffect(() => {
    if (openDropdown) {
      window.addEventListener(
        'click',
        () => {
          setOpenDropdown(false);
        },
        { once: true },
      );
    }
  });

  const dropdownHandler = () => {
    setOpenDropdown(!openDropdown);
  };

  const deleteModalHandler = () => {
    setOpenDropdown(false);
    setOpenDeleteModal(!openDeleteModal);
  };

  const reportModalHandler = () => {
    setOpenDropdown(false);
    setOpenReportModal(!openReportModal);
  };

  const noticeButtonHandler = () => {
    setOpenDropdown(false);
    if (noticeHandler) noticeHandler();
  };

  return (
    <>
      <DropdownWrap>
        {openDeleteModal && (
          <DeleteModal
            clickModalHandler={deleteModalHandler}
            deleteHandler={deleteHandler}
          />
        )}
        {openReportModal && (
          <ReportModal
            clickModalHandler={reportModalHandler}
            reportHandler={reportHandler}
          />
        )}
        <HamburgerButton onClick={dropdownHandler}>
          <IoEllipsisVerticalOutline />
        </HamburgerButton>
        {openDropdown && (
          <DropdownBox>
            {isUsers ? (
              <MenuList onClick={(e) => e.stopPropagation()}>
                <div onClick={modifyHandler}>수정</div>
                <div onClick={deleteModalHandler}>삭제</div>
                {isPost && roleType === 'ADMIN' && (
                  <div onClick={noticeButtonHandler}>
                    {isNotice ? '공지 내리기' : '공지'}
                  </div>
                )}
              </MenuList>
            ) : (
              <MenuList onClick={(e) => e.stopPropagation()}>
                <div onClick={reportModalHandler}>신고</div>
                {roleType === 'ADMIN' && (
                  <div onClick={deleteModalHandler}>삭제</div>
                )}
                {isPost && roleType === 'ADMIN' && (
                  <div onClick={noticeButtonHandler}>
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
