import React from "react";
import { useCharacters } from "../../contexts/CharactersContext";
import * as S from "./styles";

export const Loader = () => {
  const { isLoading } = useCharacters();
  if (isLoading)
    return (
      <S.Wrapper>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </S.Wrapper>
    );
  return null;
};
