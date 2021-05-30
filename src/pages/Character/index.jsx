import axios from "axios";
import md5 from "md5";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useCharacters } from "../../contexts/CharactersContext";
import * as S from "./styles";

export const Character = () => {
  const { setIsLoading } = useCharacters();
  const [character, setCharacter] = useState(null);
  const [notFound, setNotFound] = useState(null);
  const [activeButton, setActiveButton] = useState("series");
  let { id } = useParams();

  const fetchCharacter = useCallback(
    async ({ id }) => {
      setIsLoading(true);
      const timestamp = new Date().getTime().toString();
      const hash = md5(
        `${timestamp}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
      );

      axios
        .get(`${process.env.REACT_APP_BASE_URL}/${id}`, {
          params: {
            apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
            ts: timestamp,
            hash: hash,
          },
        })
        .then((res) => {
          setCharacter(res.data.data.results[0]);
        })
        .catch(() => {
          setNotFound(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setIsLoading]
  );

  useEffect(() => {
    fetchCharacter({ id });
  }, [fetchCharacter, id]);

  const title = {
    series: "Series",
    events: "Eventos",
    stories: "Histórias",
  };

  if (notFound)
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

  if (!character) return null;

  return (
    <S.Wrapper>
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
