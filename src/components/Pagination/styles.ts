import { Link } from "react-router-dom";
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
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px 10px;

  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  padding: 24px 0;
  gap: 6px;
`;

type PaginationItemProps = {
  $isActive?: boolean;
  disabled?: boolean;
};

const PaginationItemModifier = {
  active: () => css`
    background: #f0131d;
    color: #fff;
  `,
  disabled: () => css`
    pointer-events: none;
    opacity: 0.5;
  `,
};

export const PaginationItem = styled(Link)<PaginationItemProps>`
  ${({ $isActive, disabled }) => css`
    border-radius: 5px;
    color: #555555;
    font-weight: 500;
    display: flex;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    user-select: none;
    height: 32px;
    transition: opacity 0.3s ease, background 0.3s ease, color 0.3s ease;

    &:hover {
      background: #f0131d;
      color: #fff;
    }

    ${$isActive && PaginationItemModifier.active}
    ${disabled && PaginationItemModifier.disabled}
  `}
`;
