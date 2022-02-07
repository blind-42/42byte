import { Link } from 'react-router-dom';
import { MenubarWrap, Button, Search, MenuContent } from './styled';

function Menubar() {
  return (
		<>
			<MenubarWrap>
				<Button>
					<Link to="/writing">
						<input type="button" value="새 글 쓰기" />
					</Link>
				</Button>
				<Search>
					<span className='searchText'>검색어를 입력하세요</span>
					<input type="button" className='searchButton' value={"/"} />
				</Search>
				<MenuContent>

				</MenuContent>
			</MenubarWrap>
		</>
	);
}

export default Menubar;
