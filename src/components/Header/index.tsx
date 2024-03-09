import { Link } from "react-router-dom";
import * as S from "./styles";
import LogoMarvel from "assets/images/logo-marvel.jpg";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <Link to="/">
          <S.Logo
            src={LogoMarvel}
            width={112}
            height={40}
            alt="Logo escrito Marvel em cor branca com fundo vermelho"
          />
        </Link>
        <S.OwnerWrapper to="https://rcarrenho.com.br">
          <S.OwnerName>Rafael Carrenho</S.OwnerName>
          <S.OwnerThumb>RC</S.OwnerThumb>
        </S.OwnerWrapper>
      </S.HeaderContainer>
    </S.Wrapper>
  );
};
