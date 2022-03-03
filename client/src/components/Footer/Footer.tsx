import { AiFillAlert } from 'react-icons/ai'
import { FaGithubAlt } from 'react-icons/fa'
import { FooterWrap, GitLink, Names, Copyright } from './styled';

function Footer() {
  return (
    <>
      <FooterWrap>
        <GitLink>
          <div><a href='https://github.com/blind-42/Blind42/wiki/정책-정의서(1.3-update)'><AiFillAlert /></a></div>
          <div><a href='https://github.com/blind-42/Blind42'><FaGithubAlt /></a></div>
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
