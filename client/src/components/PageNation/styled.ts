import styled from 'styled-components';

export const PageNationWrap = styled.div`
	.pagination {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: #fbfbfb;
    transition: all 0.5s;
  }
  ul.pagination li a {
    text-decoration: none;
    color: #888888;
    font-size: 1rem;
    font-weight: bold;
    transition: all 0.5s;
  }
  ul.pagination li.active a {
    color: var(--color-black);
  }
  ul.pagination li.active {
    background-color: #ffffff;
    border: 1px solid var(--color-black);
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
`;