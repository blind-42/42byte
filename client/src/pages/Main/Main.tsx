import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { AiFillSetting } from "react-icons/ai";
import Header from '../../components/Header/Header';
import { LoggedinState } from 'States/LoginState';
import { AppContainer } from 'styles/styled';
import { SettingsBtn } from './styled';
import instance from 'utils/functions/axios';
import { UserData } from 'utils/functions/type';

function Main() {
	const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoggedinState);
	const token = window.location.href.split('?token=')[1];
	const [userData, setUserData] = useState<UserData>({createdDate: '', modifiedDate: '', hashId: '', profileImageUrl: '', roleType: ''});
	const { createdDate, modifiedDate, hashId, roleType } = userData
  const navigate = useNavigate();

	useEffect(() => {
		if (token)
			localStorage.setItem('4242-token', token);
		if (localStorage.getItem('4242-token'))
			setIsLoggedIn(true);
	}, [])

  useEffect(() => {
    const currentURL = window.location.search
    if (currentURL.includes('token')) {
      navigate('')
    }
  }, [window.location.href])

	useEffect(() => {
		instance
		.get('/user')
		.then((res) => setUserData(res.data))
		.catch((err) => console.log(err))
	}, [])

  return (
			<AppContainer>
				<Header />
					{roleType === 'ADMIN' &&
					<SettingsBtn>
						<Link to='/admin'>
							<div><AiFillSetting /></div>
							<div>Settings</div>
						</Link>
					</SettingsBtn>}
			</AppContainer>
  );
}

export default Main;
