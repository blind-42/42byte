import { FooterWrap, List, Detail } from './styled';

function Footer() {
  return (
    <>
      <FooterWrap>
        <List>
          <div><a href='https://github.com/blind-42/Blind42/wiki/정책-정의서(1.3-update)'>RULES</a></div>
          <div><a href='https://github.com/blind-42/Blind42'>ABOUT</a></div>
          <div>MAKER</div>
          <div>CONTACT</div>
        </List>
        <Detail>Copyright © 2022 Blind42. All rights reserved.</Detail>
      </FooterWrap>
    </>
  );
}

export default Footer;
