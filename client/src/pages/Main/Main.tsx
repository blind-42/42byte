//import Menubar from '../../components/Menubar/Menubar';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Blindboard from 'pages/Blindboard/Blindboard';
import { LoggedinState } from 'States/LoginState';
import instance from 'utils/functions/axios';
import { AppContainer } from './stlyed';
import { readConfigFile } from 'typescript';

function Main() {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoggedinState);
	const token = window.location.href.split('?token=')[1];
	if (token)
		localStorage.setItem('4242-token', token);

	useEffect(() => {
		if (localStorage.getItem('4242-token'))
			setIsLoggedIn(true);
	}, [])

  return (
			<AppContainer>
				<Header />
			</AppContainer>
  );
}

export default Main;
