import { HeaderContainer, MenubarLogoWrap, MenubarButton, Logo, UserProfileWrap, UserImg, UserName, DropdownMenu } from './styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';

function Header(/*{ isLogedIn }*/) {
	
	const [showBox, setShowBox] = useState(false);
	const dropdownHandler = () => {
		setShowBox(!showBox);
	}

	const [showMenu, setShowMenu] = useState(false);
	const menubarHandler = () => {
		setShowMenu(!showMenu);
	}

	// const logOutHandler = () {

	// }

  return (
    <>
      <HeaderContainer>
				<MenubarLogoWrap>
					<MenubarButton onClick={menubarHandler}>
						<div className='hamburger'></div>
						<div className='hamburger'></div>
						<div className='hamburger'></div>
						{showMenu
						? <Menubar />
						: null
						}
					</MenubarButton>
					<Logo>
						<div className='logoImg'>
							<Link to="/">
								<img src="" alt="LOGO" />
							</Link>
						</div>
					</Logo>
				</MenubarLogoWrap>
				<UserProfileWrap onClick={dropdownHandler}>
					<UserImg>
						<img src='/images/egg.png' alt='pfimg' />
					</UserImg>
					<UserName>
						{/* {isLogedIn
						?  */}
						<span>
								<strong>카뎃</strong>
							</span>
						{/* :	<Link to='/login'>로그인</Link>
						} */}
					</UserName>
					{/*isLogedIn && */showBox
						? <DropdownMenu>
								<li><Link to='/mypage'>마이페이지</Link></li>
								<li><Link to='/' /*onClick={logOutHandler}*/>로그아웃</Link></li>
							</DropdownMenu>
						: null
					}
				</UserProfileWrap>
      </HeaderContainer>
    </>
  );
}

export default Header;
