import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { LoggedinState } from 'States/LoginState';
import { GoSearch } from "react-icons/go";
import LoginModal from 'components/Modal/LoginModal';
import instance from 'utils/functions/axios';
import { BoardList, BoardPre } from 'utils/functions/type';
import { MenubarContainer, ExitButton, UserProfileWrap, UserImg, UserName, UserMenu, UtilWrap, WritingButton, Search, MenuListWrap } from './styled';


type GreetingProps = {
	menubarHandler: () => void;
}

export default function Menubar({ menubarHandler }: GreetingProps) {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoggedinState);
	const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
	const [boardList, setBoardList] = useState<BoardList>({contents: [], page: 0, pages: 0});
	const [boardPreview, setBoearPreview] = useState<BoardPre>({ id: 0, name: '', isDel: 0, managerId: 0});
	const { id, name, isDel, managerId } = boardPreview;

	useEffect(() => {
		instance
		.get('/board/list')
		.then((res) => setBoardList(res.data))
		.catch((err) => console.log(err))
	})

	const logoutHandler = () => {
		localStorage.removeItem('4242-token');
		setIsLoggedIn(false);
		window.location.href = '/';
  };

	const openLoginModalHandler = () => {
    setOpenLoginModal(!openLoginModal);
  };

	const toBoardHandler = () => {
		window.location.href = `/board?boardId=${id}`
	}
	
  return (
		<>
		{openLoginModal && (
        <LoginModal openLoginModalHandler={openLoginModalHandler}/>
      )}
			<MenubarContainer>
				<ExitButton onClick={menubarHandler}>
					<div>&times;</div>
				</ExitButton>
				<UserProfileWrap>
					<UserImg>
						<img src='/images/egg.png' alt='pfimg' />
					</UserImg>
					<UserName>
						{isLoggedIn
						? <div>
								<strong>카뎃</strong>
							</div>
						:	<Link to='/login'>로그인</Link>
						}
					</UserName>
					{isLoggedIn &&
						<UserMenu>
							<Link to='/mypage?=post&page=1'>
								<div>마이페이지</div>
							</Link>
							<Link to='/' onClick={logoutHandler}>
								<div>로그아웃</div>
							</Link>
						</UserMenu>
					}
				</UserProfileWrap>
				<UtilWrap>
					<WritingButton>
					{isLoggedIn 
					? <Link to="/writing">
							<input type="button" value="새 글쓰기" />
						</Link>
					: <input type="button" value="새 글쓰기" onClick={openLoginModalHandler}/>
					}
					</WritingButton>
					{isLoggedIn
					? <Search>
							<input type="text" placeholder='검색어를 입력하세요'/>
							<button>
								<div><GoSearch /></div>
							</button>
						</Search>
					: <Search onClick={openLoginModalHandler}>
							<input type="text" placeholder='검색어를 입력하세요'/>
							<button>
								<div>&#9740;</div>
							</button>
						</Search>
					}
				</UtilWrap>
				<MenuListWrap>
					<ul>
						{/* <bcontents.map((el: BoardPre, idx) => {
							return (!el.isDel && <Link to='/board?boardId='>el.name</Link>)})}
							<Link to="/blindboard?page=1">블라인드 게시판</Link>
						</li> */}
					</ul>
				</MenuListWrap>
			</MenubarContainer>
		</>
	);
}
