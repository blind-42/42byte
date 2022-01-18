import { FooterWrap, List, Detail } from './styled';

function Footer() {
  return (
    <>
      <FooterWrap>
        <List>
          <span><a href='https://github.com/blind-42/Blind42/wiki/정책-정의서(1.3-update)'>RULES</a></span>
          <span><a href='https://github.com/blind-42/Blind42'>ABOUT</a></span>
          <span>MAKER</span>
          <span>CONTACT</span>
        </List>
        <Detail>Copyright © 2022 Blind42. All rights reserved.</Detail>
      </FooterWrap>
    </>
  );
}

export default Footer;
