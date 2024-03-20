import styled from "styled-components";

export const SearchForm = styled.form``;

export const SearchLabel = styled.label`
  color: #555555;
  font-weight: bold;
  font-size: 16px;
  display: block;
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  max-width: 295px;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    color: #555555;
    cursor: pointer;
    transition: color 0.3s ease-out;

    &:hover {
      color: #333333;
    }
  }
`;

export const SearchInput = styled.input`
  margin-top: 8px;
  display: block;
  width: 100%;
  height: 32px;
  padding: 0 16px;
  border-radius: 4px;
  outline: 0;
`;
