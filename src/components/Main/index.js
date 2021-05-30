import React from "react";
import * as S from "./styles.js";
import { FaSearch } from "react-icons/fa";

export const Main = ({ characters }) => {
  console.log(characters);
  return (
    <S.Wrapper>
      <S.Container>
        <h1>Busca de personagens</h1>
        <form>
          <label>
            Nome do personagem
            <div>
              <input type="text" placeholder="Search" />
              <FaSearch />
            </div>
            <S.CharactersTable>
              <thead>
                <tr>
                  <th>Personagens</th>
                  <th>Serie</th>
                  <th>Eventos</th>
                </tr>
              </thead>
              <tbody>
                {characters?.map((character) => {
                  return (
                    <S.CharacterItem key={character.id}>
                      <td>
                        <div>
                          <img
                            src={
                              character.thumbnail.path +
                              "." +
                              character.thumbnail.extension
                            }
                            alt={character.name}
                          />
                          <strong>{character.name}</strong>
                        </div>
                      </td>
                      <td>
                        {character.series.items.slice(0, 3).map((serie) => {
                          return <span>{serie.name}</span>;
                        })}
                      </td>
                      <td>
                        {character.events.items.slice(0, 3).map((event) => {
                          return <span>{event.name}</span>;
                        })}
                      </td>
                    </S.CharacterItem>
                  );
                })}
              </tbody>
            </S.CharactersTable>
          </label>
        </form>
      </S.Container>
    </S.Wrapper>
  );
};
