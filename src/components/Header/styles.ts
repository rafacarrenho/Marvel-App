import { Container } from "components/Container";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  background-color: #fff;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.img`
  width: 132px;
  height: auto;
  display: block;
`;

export const OwnerName = styled.span`
  color: #555555;
  font-weight: bold;
  transition: color 0.3s ease;
`;

export const OwnerThumb = styled.span`
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #555555;
  padding: 5px;
  background: #f5f5f5;
  border-radius: 4px;
  transition: color 0.3s ease, background-color 0.3s ease;
`;

export const OwnerWrapper = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  text-align: right;
  text-decoration: none;

  &:hover {
    ${OwnerName} {
      color: #f0131d;
    }

    ${OwnerThumb} {
      color: white;
      background-color: #f0131d;
    }
  }
`;
