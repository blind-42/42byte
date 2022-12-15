import { FooterWrap, GitLink, Names, Copyright } from './styled';

function Footer() {
  return (
    <>
      <FooterWrap>
        <GitLink>
          <div>
            <a href="https://github.com/blind-42/42byte/wiki/%EC%A0%95%EC%B1%85-%EC%A0%95%EC%9D%98%EC%84%9C">
              <img src="images/scroll.png" alt="scroll-img" />
            </a>
          </div>
          <div>
            <a href="https://github.com/blind-42/Blind42">
              <img src="images/githubLogo.png" alt="githubLogo-img" />
            </a>
          </div>
        </GitLink>
        <Names>
          <div>donghyuk | nheo | jihyukim | jabae | jinhyupa</div>
        </Names>
        <Copyright>
          <div>ⓒ 2021 42byte</div>
        </Copyright>
      </FooterWrap>
    </>
  );
}

export default Footer;
