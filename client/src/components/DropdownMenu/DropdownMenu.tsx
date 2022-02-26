
import React, { useState } from 'react';
import ReportModal from 'components/Modal/ReportModal';
import { DropdownWrap, Dots, DropdownBox, MenuList } from './styled';

type GreetingProps = {
	isUsers: boolean
	delModalHandler: () => void;
	modifyHandler: () => void;
	type: string
	postId: number
	commentId: number
}

export default function DropdownMenu ({ isUsers, delModalHandler, modifyHandler, type, postId, commentId }: GreetingProps) {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [openRptModal, setOpenRptModal] = useState<boolean>(false);

	const reportModalHandler = () => {
		setOpenDropdown(false);
		setOpenRptModal(!openRptModal);
	}
	
	const dropdownHandler = () => {
		setOpenDropdown(!openDropdown);
	}

	return (
		<>
			<DropdownWrap>
			{openRptModal && (
				<ReportModal clickModalHandler={reportModalHandler} type={type} postId={postId} commentId={commentId} />)}
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
								<div onClick={delModalHandler}>삭제</div>
							</MenuList>
						: <MenuList>
								<div onClick={reportModalHandler}>신고</div>
							</MenuList>
					}
				</DropdownBox>
			}
			</DropdownWrap>
		</>
	);
}