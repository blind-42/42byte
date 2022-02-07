import { Container, UserProfile, UserImg, UserName, DropdownMenu } from './styled';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(/*{ isLogedIn }*/) {
	
	const [show, setShow] = useState(false);
	const dropdownHandler = () => {
		setShow(!show);
	}
	// const logOutHandler = () {

	// }

  return (
    <>
      <Container>
				<UserProfile onClick={dropdownHandler}>
					<UserImg>
						<img src='./egg.png' alt='profileimg' />
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
					{/*isLogedIn && */show
						? <DropdownMenu>
								<li><Link to='/mypage'>마이페이지</Link></li>
								<li><Link to='/' /*onClick={logOutHandler}*/>로그아웃</Link></li>
							</DropdownMenu>
						: null
					}
				</UserProfile>
      </Container>
    </>
  );
}

export default Header;
