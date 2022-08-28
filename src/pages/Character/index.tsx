import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { Loader } from "components/Loader";
import { useCharacter } from "services/characters/useCharacter";
import * as S from "./styles";

type ActiveButton = "series" | "events" | "stories";

export const Character = () => {
  const [activeButton, setActiveButton] = useState<ActiveButton>("series");
  let { id }: { id: string } = useParams();

  const { data: character, error, isLoading } = useCharacter(id);

  const title = {
    series: "Series",
    events: "Eventos",
    stories: "Histórias",
  };

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
      <S.ButtonBack>
        <Link to="/">Voltar</Link>
      </S.ButtonBack>
      <S.Container>
        <S.Header>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
          />
          <div>
            <h1>{character.name}</h1>
            <S.Button
              isActive={activeButton === "series"}
              onClick={() => setActiveButton("series")}
            >
              Series
            </S.Button>
            <S.Button
              isActive={activeButton === "events"}
              onClick={() => setActiveButton("events")}
            >
              Eventos
            </S.Button>
            <S.Button
              isActive={activeButton === "stories"}
              onClick={() => setActiveButton("stories")}
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
      </S.Container>
    </S.Wrapper>
  );
};
