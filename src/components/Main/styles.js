import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px - 90px);
  background-color: #e5e5e5;
  overflow-y: scroll;
`;

export const Container = styled.main`
  padding: 24px;
  max-width: 1140px;
  margin: 0 auto;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #555555;
    margin-bottom: 16px;
  }

  label {
    color: #555555;
    font-weight: bold;
    font-size: 16px;
    display: block;

    div {
      position: relative;
      max-width: 295px;
      input {
        margin-top: 8px;
        display: block;
        width: 100%;
        height: 32px;
        padding: 0 16px;
        border-radius: 4px;
        outline: 0;
      }

      svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 8px;
      }
    }
  }
`;
