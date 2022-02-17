import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { LoggedinState } from 'States/LoginState';
import instance from 'utils/functions/axios';
import { MenubarContainer, ExitButton, UserProfileWrap, UserImg, UserName, UserMenu, UtilWrap, WritingButton, Search, MenuListWrap } from './styled';

type GreetingProps = {
	menubarHandler: () => void;
}

function Menubar({ menubarHandler }: GreetingProps) {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoggedinState);

	const logoutHandler = () => {
    // instance
    //   .get('/user', { headers: { Authorization: `Bearer ${localStorage.getItem('4242-token')}` || '' } } )
    //   .then(() => {
				localStorage.removeItem('4242-token');
				setIsLoggedIn(false);
				window.location.href = '/';
      // })
      // .catch((err) => {
			// 	console.log(err);
        // if (err.response.status === 401) {
        //   alert('로그인이 만료되었습니다. 다시 로그인해주세요.');
        //   localStorage.removeItem('4242-token');
        //   setIsLoggedIn(false);
        //   window.location.assign('/');
        // }
				// else 
				// 	window.location.assign('/error');
      // });
  };
	
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
						{isLoggedIn
						? <div>
								<strong>카뎃</strong>
							</div>
						:	<Link to='/login'>로그인</Link>
						}
					</UserName>
					{isLoggedIn &&
						<UserMenu>
							<Link to='/mypage'>
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
