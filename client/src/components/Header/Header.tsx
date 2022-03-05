import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Menubar from 'components/Menubar/Menubar';
import {
  HeaderContainer,
  MenubarLogoWrap,
  MenubarButton,
  Logo,
  Clock,
} from './styled';
// import moment from 'moment';

interface IUseInterval {
  (callback: () => void, interval: number): void;
}

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [nowTime, setNowTime] = useState(Date.now());
  const [delay, setDelay] = useState(1000);
  // const current_time = moment().locale('en').format("HH:mm A")

  const menubarHandler = () => {
    setShowMenu(!showMenu);
  };

  useInterval(() => {
    setNowTime(Date.now());
  }, delay);

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
        <Clock>
          <Moment format="HH:mm">{nowTime}</Moment>
        </Clock>
      </HeaderContainer>
    </>
  );
}

const useInterval: IUseInterval = (callback, delay) => {
  const savedCallback = useRef<(() => void) | null>(null);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
