import React from "react";
import Logo from "../../assets/img/logo.svg";
import * as S from "./styles.js";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <img className="logo-objective" src={Logo} alt="Objective" />
      </S.Logo>
      <S.Candidate>
        <div>
          <strong>Rafael Carrenho</strong>
          <span>Teste de Front-end</span>
        </div>
        <S.CandidateThumb>RC</S.CandidateThumb>
      </S.Candidate>
    </S.Wrapper>
  );
};
