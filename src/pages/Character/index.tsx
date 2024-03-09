import { Link } from "react-router-dom";

import { Loader } from "components/Loader";

import * as S from "./styles";
import { CharacterTabEnum, useCharacter } from "./useCharacter";

export const Character = () => {
  const { title, error, isLoading, character, activeButton, setActiveButton } =
    useCharacter();

  if (error)
    return (
      <S.Wrapper>
        <S.NotFound>
          <h1>Personagem não encontrado</h1>
          <Link to="/">
            <button>Voltar</button>
          </Link>
        </S.NotFound>
      </S.Wrapper>
    );

  if (isLoading) return <Loader isLoading={isLoading} />;

  if (!character) return null;

  return (
    <S.Wrapper>
      <S.CustomContainer>
        <S.ButtonBack to="/">Voltar</S.ButtonBack>
        <S.Header>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <div>
            <h1>{character.name}</h1>
            <S.Button
              isActive={activeButton === CharacterTabEnum.series}
              onClick={() => setActiveButton(CharacterTabEnum.series)}
            >
              Series
            </S.Button>
            <S.Button
              isActive={activeButton === CharacterTabEnum.events}
              onClick={() => setActiveButton("events")}
            >
              Eventos
            </S.Button>
            <S.Button
              isActive={activeButton === CharacterTabEnum.stories}
              onClick={() => setActiveButton(CharacterTabEnum.stories)}
            >
              Histórias
            </S.Button>
          </div>
        </S.Header>
        <S.ListItems>
          <h2>{title[activeButton]}</h2>
          <ul>
            {character[activeButton].items.map((item) => (
              <li key={item.name}>{item.name}</li>
            ))}
          </ul>
        </S.ListItems>
      </S.CustomContainer>
    </S.Wrapper>
  );
};
