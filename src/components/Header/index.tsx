import { Link } from "react-router-dom";
import * as S from "./styles";
import { Logo } from "assets/icons/Logo";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo>
        <Link to="/">
          <Logo />
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
