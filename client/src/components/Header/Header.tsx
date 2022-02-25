import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../Menubar/Menubar';
import { HeaderContainer, MenubarLogoWrap, MenubarButton, Logo } from './styled';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const menubarHandler = () => {
		setShowMenu(!showMenu);
	}

  return (
    <>
      <HeaderContainer>
				<MenubarLogoWrap>
					<MenubarButton onClick={menubarHandler}>
						<div>MENU</div>
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
