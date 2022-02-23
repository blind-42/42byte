import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Blindboard from 'pages/Blindboard/Blindboard';
import { LoggedinState } from 'States/LoginState';
import { AppContainer } from './stlyed';

function Main() {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoggedinState);
	const token = window.location.href.split('?token=')[1];
  const navigate = useNavigate();
	if (token)
		localStorage.setItem('4242-token', token);

	useEffect(() => {
		if (localStorage.getItem('4242-token'))
			setIsLoggedIn(true);
	}, [])

  useEffect(() => {
    const currentURL = window.location.search
    if (currentURL.includes('token')) {
      navigate('')
    }
  }, [window.location.href])

  return (
			<AppContainer>
				<Header />
			</AppContainer>
  );
}

export default Main;
