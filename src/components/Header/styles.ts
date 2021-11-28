import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 64px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`;

export const Logo = styled.div`
  img {
    height: 24px;
  }
`;

export const Candidate = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  text-align: right;
  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    div {
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

export const CandidateThumb = styled.span`
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
`;
