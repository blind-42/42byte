import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageNationWrap = styled.div`
  .pagination {
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin: 1rem 0;
    background: #c4c4c4;
    border-top: solid 1px #000;
    border-left: solid 1px #000;
    border-right: solid 1px #fff;
    border-bottom: solid 1px #fff;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 2.3rem;
    height: 2.3rem;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background: #c4c4c4;
    border-top: solid 2px #fff;
    border-left: solid 2px #fff;
    border-right: solid 2px #000;
    border-bottom: solid 2px #000;
    transition: all 0.5s;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #888888;
    font-size: 1rem;
    font-weight: 700;
    transition: all 0.5s;
  }
  ul.pagination li.active a {
    color: var(--color-black);
  }
  ul.pagination li.active {
    background-color: #c4c4c4;
    // border: 1px solid var(--color-black);
  }
  ul.pagination li a:hover,
  ul.pagination li a.active {
    color: var(--color-black);
  }
  .page-selection {
    width: 48px;
    height: 30px;
    color: #337ab7;
  }
  @media screen and (min-width: 768px) {
    ul.pagination li {
      width: 1.8rem;
      height: 1.8rem;
      font-size: 0.9rem;
    }
    ul.pagination li a {
      font-size: 0.9rem;
    }
  }
`;
