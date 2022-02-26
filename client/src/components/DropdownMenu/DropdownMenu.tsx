
import React, { useState } from 'react';
import { DropdownWrap, Dots, DropdownBox, MenuList } from './styled';

type GreetingProps = {
	isUsers: boolean;
	delModalHandler: () => void;
	modifyHandler: () => void;
}

export default function DropdownMenu ({ isUsers, delModalHandler, modifyHandler }: GreetingProps) {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);

	const dropdownHandler = () => {
		setOpenDropdown(!openDropdown);
	}

	return (
		<>
			<DropdownWrap>
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
								<div>신고</div>
							</MenuList>
					}
				</DropdownBox>
			}
			</DropdownWrap>
		</>
	);
}