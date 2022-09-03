import * as S from "./styles";
import { FaSearch } from "react-icons/fa";
import { CharacterType } from "services/characters/types";
import { useMain } from "./useMain";

type MainProps = {
  characters: CharacterType[] | undefined;
  filter: string;
  setFilter: (filter: string) => void;
};

export const Main = ({ characters, filter, setFilter }: MainProps) => {
  const { handleCharacter } = useMain();

  return (
    <S.Wrapper>
      <S.Container>
        <h1>Busca de personagens</h1>
        <form>
          <label>
            Nome do personagem
            <div>
              <input
                type="text"
                placeholder="Search"
                id="finder"
                name="finder"
                value={filter}
                onChange={({ target }) => setFilter(target.value)}
              />
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
                    <S.CharacterItem
                      key={character.id}
                      onClick={() => handleCharacter(character.id)}
                    >
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
                          return <span key={serie.name}>{serie.name}</span>;
                        })}
                      </td>
                      <td>
                        {character.events.items.slice(0, 3).map((event) => {
                          return <span key={event.name}>{event.name}</span>;
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
