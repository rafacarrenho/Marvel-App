import React from "react";
import * as S from "./styles.js";
import { FaSearch } from "react-icons/fa";

export const Main = () => {
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
            <table>
              <tr>
                <th>Personagens</th>
                <th>Serie</th>
                <th>Personagens</th>
              </tr>
            </table>
          </label>
        </form>
      </S.Container>
    </S.Wrapper>
  );
};
