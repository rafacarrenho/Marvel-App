import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: #fff;
  overflow: hidden;
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 30px 0;

    li + li {
      margin-left: 5px;
    }
  }
`;

export const PaginationItem = styled.li`
  ${({ isActive }) => css`
    button {
      background: ${isActive ? "#167abc" : "#f5f5f5"};
      border: 1px solid ${isActive ? "#167abc" : "#e5e5e5"};
      width: 40px;
      height: 32px;
      border-radius: 5px;
      color: ${isActive ? "#fff" : "#555555"};
    }
  `}
`;

export const PaginationArrow = styled.li`
  button {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: #555555;
    font-size: 1.1rem;
  }
`;
