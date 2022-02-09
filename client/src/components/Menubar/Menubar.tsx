import { Link } from 'react-router-dom';
import { MenubarContainer, ExitButton, UtilWrap, WritingButton, Search, MenuListWrap } from './styled';
import React, { useState } from 'react';

function Menubar() {
	const [exit, setExit] = useState(false);
	const exitButtonHandler = () => {
		setExit(!exit);
	}

  return (
		<>
			<MenubarContainer>
				<ExitButton>
					<input type='button' value='x' />
				</ExitButton>
				<UtilWrap>
					<WritingButton>
						<Link to="/writing">
							<input type="button" value="새 글 쓰기" />
						</Link>
					</WritingButton>
					<Search>
						<div>검색어를 입력하세요</div>
						<input type="button" value='?' />
					</Search>
				</UtilWrap>
				<MenuListWrap>
					<ul>
						<li>
							<Link to="/blindboard">
								<div>블라인드 게시판</div>
							</Link>
						</li>
					</ul>
				</MenuListWrap>
			</MenubarContainer>
		</>
	);
}

export default Menubar;
