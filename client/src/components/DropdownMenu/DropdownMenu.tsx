
import React, { useState } from 'react';
import ReportModal from 'components/Modal/ReportModal';
import DeleteModal from 'components/Modal/DeleteModal';
import { DropdownWrap, Dots, DropdownBox, MenuList } from './styled';

type GreetingProps = {
	isUsers: boolean
	modifyHandler: () => void;
	deleteHandler: () => void;
	reportHandler: (reportIssue: string) => void;
}

export default function DropdownMenu ({ isUsers, modifyHandler, deleteHandler, reportHandler }: GreetingProps) {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [openDelModal, setOpenDelModal] = useState<boolean>(false);
	const [openRptModal, setOpenRptModal] = useState<boolean>(false);

	const dropdownHandler = () => {
		setOpenDropdown(!openDropdown);
	}

	const deleteModalHandler = () => {
		setOpenDropdown(false);
		setOpenDelModal(!openDelModal);
	}

	const reportModalHandler = () => {
		setOpenDropdown(false);
		setOpenRptModal(!openRptModal);
	}

	return (
		<>
			<DropdownWrap>
				{openDelModal &&
				<DeleteModal clickModalHandler={deleteModalHandler} deleteHandler={deleteHandler} />}
				{openRptModal &&
				<ReportModal clickModalHandler={reportModalHandler} reportHandler={reportHandler} />}
				<Dots onClick={dropdownHandler}>
					<div></div>
					<div></div>
					<div></div>
				</Dots>
				{openDropdown &&
				<DropdownBox>
					{isUsers
					? <MenuList>
							<div onClick={modifyHandler}>수정</div>
							<div onClick={deleteModalHandler}>삭제</div>
						</MenuList>
					: <MenuList>
							<div onClick={reportModalHandler}>신고</div>
						</MenuList>}
				</DropdownBox>}
			</DropdownWrap>
		</>
	);
}