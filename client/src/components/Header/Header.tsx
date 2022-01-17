import { Container, UserImg, UserName } from './styled';

function Header() {
  return (
    <>
      <Container>
        <UserImg>
          <img src='./egg.png' alt='profileimg' />
        </UserImg>
        <UserName>
          <span>
            <strong>카뎃</strong>
          </span>
        </UserName>
      </Container>
    </>
  );
}

export default Header;
