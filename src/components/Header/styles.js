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
  gap: 8px;
  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const CandidateThumb = styled.span`
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #555555;
  padding: 5px;
  background: #f5f5f5;
  border-radius: 4px;
`;
