import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';
import { HeaderContainer, MenubarLogoWrap, MenubarButton, Logo } from './styled';

function Header(/*{ isLogedIn }*/) {
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
						<div>MENU</div>
						{/* <div className='hamburger'/>
						<div className='hamburger'/>
						<div className='hamburger'/> */}
					</MenubarButton>
					{showMenu && <Menubar menubarHandler={menubarHandler}/>}
					<Logo>
						<Link to="/">
							<img src="" alt="LOGO" />
						</Link>
					</Logo>
				</MenubarLogoWrap>
      </HeaderContainer>
    </>
  );
}

export default Header;
