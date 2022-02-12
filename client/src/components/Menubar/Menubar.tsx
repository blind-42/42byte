import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenubarContainer, ExitButton, UtilWrap, WritingButton, Search, MenuListWrap } from './styled';

type GreetingProps = {
	menubarHandler: () => void;
}

function Menubar({ menubarHandler }: GreetingProps) {
	// const [exit, setExit] = useState(false);
	// const exitButtonHandler = () => {
	// 	setExit(!exit);
	// }
	console.log(menubarHandler);

  return (
		<>
			<MenubarContainer>
				<ExitButton onClick={menubarHandler}>
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
						<button className='searchButton'>
							<div>&#9740;</div>
						</button>
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
