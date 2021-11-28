import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Link to="/">
          <img className="logo-objective" src={Logo} alt="Objective" />
        </Link>
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
