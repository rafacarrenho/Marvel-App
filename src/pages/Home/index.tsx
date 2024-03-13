import { Loader } from "components/Loader";
import { CharactersList } from "components/CharactersList";
import { Pagination } from "components/Pagination";

import { useHome } from "./useHome";
import { Search } from "components/Search";
import * as S from "./styles";
import { Container } from "components/Container";

export const Home = () => {
  const {
    filter,
    isLoading,
    characters,
    totalCharacters,
    currentPage,
    limit,
    handleChangeFilter,
  } = useHome();

  return (
    <S.Wrapper>
      <Container>
        <S.Title>Busca de personagens</S.Title>
        <Search value={filter} onChange={handleChangeFilter} />
        <CharactersList characters={characters} />
        <Pagination
          total={totalCharacters}
          currentPage={currentPage}
          limit={limit}
        />
        <Loader isLoading={isLoading} />
      </Container>
    </S.Wrapper>
  );
};
