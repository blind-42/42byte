import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Menubar from 'components/Menubar/Menubar';
import { HeaderContainer, MenubarLogoWrap, MenubarButton, Logo, Clock } from './styled';
// import moment from 'moment';

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);
	const [nowTime, setNowTime] = useState(20220304);
	// const current_time = moment().locale('en').format("HH:mm A")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNowTime(Date.now());
    }, 1000)

    return () => clearTimeout(timeout);
  }, [nowTime])

	const menubarHandler = () => {
		setShowMenu(!showMenu);
	}

  return (
    <>
      <HeaderContainer>
				<MenubarLogoWrap>
					<MenubarButton onClick={menubarHandler}>
						MENU
					</MenubarButton>
					{showMenu && <Menubar menubarHandler={menubarHandler}/>}
					<Logo>
						<Link to="/">
							<img src="/images/42byteLogo.png" alt="LOGO" />
						</Link>
					</Logo>
				</MenubarLogoWrap>
				<Clock>
					<Moment format="HH:mm">{nowTime}</Moment> 
				</Clock>
      </HeaderContainer>
    </>
  );
}
