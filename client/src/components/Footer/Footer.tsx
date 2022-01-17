import { FooterWrap, List, Detail } from './styled';

function Footer() {
  return (
    <>
      <FooterWrap>
        <List>
          <span>RULES</span>
          <span>ABOUT</span>
          <span>MAKER</span>
          <span>CONTACT</span>
        </List>
        <Detail>Copyright © 2022 42Blind. All rights reserved.</Detail>
      </FooterWrap>
    </>
  );
}

export default Footer;
