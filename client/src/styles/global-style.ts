// global-style.ts
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

// 외부에서 import 할거니까 모듈 내보내자~!
export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  /** reset css **/
  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, pre,
  a, abbr, acronym, address, big, cite,
  del, dfn,img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption,article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    letter-spacing: -0.9px;
    line-height: 1;
    /* 스크롤바 제거 */
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  body::-webkit-scrollbar {
    display: none;
  }
  ol, ul {
    list-style: none;
  }
  a {
    color: var(--color-black);
    text-decoration: none;
  }

  /** :root css **/
  :root {
    --color-red: #b22222;
    --color-beige: #d2b69e;
    --color-blue: #567593;
    --color-black: #3d3d3d;
    --box-padding: 3rem 0;
    /* z-index */
    --modal-index: 10;
    --nav-btn-index: 9;
    --nav-index: 8;
    --top-index: 7;
    --button-index: 6;
  }

  /** global css **/
  html {
    /* 모바일버전 rem 상대단위 기준점 */
    font-size: 12px;
  }

  body {
    min-width: 320px;
    font-family: 'Nanum Gothic', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--color-black);
    position: relative;
  }

  input[type='email'],
  input[type='text'],
  button,
  span,
  textarea {
    font-family: 'Nanum Gothic', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    color: var(--color-black);
  }

  @media only screen and (min-width: 768px) {
    /* PC버전 rem 상대단위 기준점 */
    html {
      font-size: 16px;
    }
  }
`;
