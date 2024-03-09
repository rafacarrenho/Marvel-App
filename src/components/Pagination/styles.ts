import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    padding: 24px 0;
    gap: 6px;
  }
`;

type PaginationItemProps = {
  isActive: boolean;
};

const PaginationItemModifier = {
  active: () => css`
    background: #f0131d;
    color: #fff;
  `,
};

export const PaginationItem = styled.li<PaginationItemProps>`
  ${({ isActive }) => css`
    button {
      background: #e5e5e5;
      width: 40px;
      height: 32px;
      border-radius: 5px;
      color: #fff;
      font-weight: 500;

      ${isActive && PaginationItemModifier.active}
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
