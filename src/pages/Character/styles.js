import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  background-color: #e5e5e5;
  overflow-y: scroll;
`;

export const Container = styled.main`
  padding: 24px;
  max-width: 1140px;
  margin: 0 auto;
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #555555;

  button {
    margin-top: 20px;
    padding: 8px 24px;
    background-color: #fff;
    color: #555555;
    border-radius: 4px;
  }
`;

export const Header = styled.div`
  display: flex;
  img {
    height: 300px;
    width: 300px;
    border-radius: 4px;
    object-fit: cover;
    margin-right: 40px;
  }

  h1 {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    h1 {
      text-align: center;
    }

    button {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const Button = styled.button`
  ${({ isActive }) => css`
    display: block;
    width: 200px;
    background-color: ${isActive ? "#555555" : "#fff"};
    color: ${isActive ? "#fff" : "#555555"};
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 4px;
    transition: 0.3s;
  `}
`;

export const ListItems = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 20px;
  margin-top: 40px;
  ul {
    margin-left: 20px;
    padding: 0;
    li {
      line-height: 30px;
    }
  }
`;
