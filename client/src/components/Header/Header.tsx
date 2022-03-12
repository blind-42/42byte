import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from 'components/Menubar/Menubar';
import Clock from './Clock';
import {
  HeaderContainer,
  MenubarLogoWrap,
  MenubarButton,
  Logo,
} from './styled';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menubarHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <HeaderContainer>
        <MenubarLogoWrap>
          <MenubarButton onClick={menubarHandler}>MENU</MenubarButton>
          {showMenu && <Menubar menubarHandler={menubarHandler} />}
          <Logo>
            <Link to="/">
              <img src="/images/42byteLogo.png" alt="LOGO" />
            </Link>
          </Logo>
        </MenubarLogoWrap>
        <Clock />
      </HeaderContainer>
    </>
  );
}
