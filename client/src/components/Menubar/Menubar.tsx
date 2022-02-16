import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenubarContainer, ExitButton, UserProfileWrap, UserImg, UserName, UserMenu, UtilWrap, WritingButton, Search, MenuListWrap } from './styled';

type GreetingProps = {
	menubarHandler: () => void;
}

function Menubar({ menubarHandler }: GreetingProps) {
	// const [exit, setExit] = useState(false);
	// const exitButtonHandler = () => {
	// 	setExit(!exit);
	// }

  return (
		<>
			<MenubarContainer>
				<ExitButton onClick={menubarHandler}>
					<div>&times;</div>
				</ExitButton>
				<UserProfileWrap>
					<UserImg>
						<img src='/images/egg.png' alt='pfimg' />
					</UserImg>
					<UserName>
						{/* {isLogedIn
						?  */}
						<div>
								<strong>카뎃</strong>
							</div>
						{/* :	<Link to='/login'>로그인</Link>
						} */}
					</UserName>
					<UserMenu>
						<Link to='/mypage'>
							<div>마이페이지</div>
						</Link>
						<Link to='/' /*onClick={logOutHandler}*/>
							<div>로그아웃</div>
						</Link>
					</UserMenu>
				</UserProfileWrap>
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
							<a href="/blindboard?page=1">블라인드 게시판</a>
						</li>
					</ul>
				</MenuListWrap>
			</MenubarContainer>
		</>
	);
}

export default Menubar;
