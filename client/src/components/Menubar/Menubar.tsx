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
					<div>&times;</div>
				</ExitButton>
				<UtilWrap>
					<WritingButton>
						<Link to="/writing">
							<input type="button" value="새 글 쓰기" />
						</Link>
					</WritingButton>
					<Search>
						<input type="text" className='textInput' placeholder='검색어를 입력하세요'/>
						<input type="button" className='searchButton' value='?' />
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
