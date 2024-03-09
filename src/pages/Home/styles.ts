import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  padding-bottom: 90px;
  padding-top: 20px;
  background-color: #e5e5e5;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #555555;
  margin-bottom: 16px;
`;

export const Container = styled.main`
  padding: 24px;
  max-width: 1140px;
  margin: 0 auto;
`;

export const CharactersTable = styled.table`
  margin-top: 20px;
  width: 100%;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 1em;

  @media screen and (max-width: 500px) {
    th:not(:first-child) {
      display: none;
    }
  }
`;

export const CharacterItem = styled.tr`
  width: 100%;
  text-align: left;
  background-color: white;
  cursor: pointer;

  td {
    padding: 4px;
    height: 88px;

    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;

      div {
        display: flex;
        align-items: center;

        strong {
          margin-left: 16px;
        }
      }
    }

    @media screen and (max-width: 500px) {
      &:not(:first-child) {
        display: none;
      }
      border-radius: 5px;
    }
  }

  span {
    display: block;
  }

  img {
    height: 48px;
    width: 48px;
    object-fit: cover;
    border-radius: 4px;
    display: inline-block;
    margin-left: 16px;
  }
`;
