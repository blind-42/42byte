import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { LoggedinState } from 'States/LoginState';
import { GoSearch } from "react-icons/go";
import Loading from 'pages/Loading/Loading';
import Error from 'pages/Error/Error';
import LoginModal from 'components/Modal/LoginModal';
import instance from 'utils/functions/axios';
import { BoardList, BoardPre } from 'utils/functions/type';
import { stringLimit } from 'utils/functions/functions';
import { MenubarContainer, Topbar, UserProfileWrap, UserImg, UserName, UserMenu, UtilWrap, WritingButton, Search, BoardListWrap, WrapTitle, BoardNames } from './styled';


type GreetingProps = {
	menubarHandler: () => void;
}

export default function Menubar({ menubarHandler }: GreetingProps) {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoggedinState);
	const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
	const [boardList, setBoardList] = useState<BoardList>({contents: [], page: 0, pages: 0});
	const { contents, page, pages } = boardList;
	const { isFetching, isLoading, error, data } = useQuery(
		['menubar_key', ], () => {
			instance
			.get('/board/list')
			.then((res) => setBoardList(res.data))
		}, {
			retry: 0, 
			refetchOnWindowFocus: false,
			keepPreviousData: true
		}
	);

	const logoutHandler = () => {
		localStorage.removeItem('4242-token');
		setIsLoggedIn(false);
		window.location.href = '/';
  };

	const openLoginModalHandler = () => {
    setOpenLoginModal(!openLoginModal);
  };

	if (isFetching || isLoading) return <Loading />

	if (error) return <Error />

  return (
		<>
		{openLoginModal && (
        <LoginModal openLoginModalHandler={openLoginModalHandler}/>
      )}
			<MenubarContainer>
				<Topbar>
					<div onClick={menubarHandler}>&times;</div>
				</Topbar>
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
								<div><GoSearch /></div>
							</button>
						</Search>
					}
				</UtilWrap>
				<BoardListWrap>
					<WrapTitle>TOP 게시판</WrapTitle>
					<BoardNames>
					{contents.map((el: BoardPre, idx) => {
						return (
							!(el.isDel) &&
							<Link to={`/board?=boardId=${el.id}`}>
								<div onClick={menubarHandler}>{stringLimit(el.name, 10)}</div>
							</Link>
						)
					})}
					</BoardNames>
				</BoardListWrap>
			</MenubarContainer>
		</>
	);
}
