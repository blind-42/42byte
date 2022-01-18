import { Link } from 'react-router-dom';
import { MenubarWrap, Logo, Button, Search, MenuContent } from './styled';

function Menubar() {
  return (
		<>
			<MenubarWrap>
				<Logo>
					<div className='logoImg'>
						<Link to="/">
							<img src="" alt="LOGO" />
						</Link>
					</div>
				</Logo>
				<Button>
						<Link to="/writing">
							<input type="button" className='writingButton' value="새 글 쓰기" />
						</Link>
				</Button>
				<Search>
					<input type="text" className='textInput' placeholder='검색어를 입력하세요'/>
					<input type="button" className='searchButton' value={"/"} />
				</Search>
				<MenuContent>

				</MenuContent>
			</MenubarWrap>
		</>
	);
}

export default Menubar;
