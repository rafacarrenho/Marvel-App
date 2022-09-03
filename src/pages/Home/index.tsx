import { Loader } from "components/Loader";
import { Main } from "components/Main";
import { Pagination } from "components/Pagination";

import { useHome } from "./useHome";

export const Home = () => {
  const {
    filter,
    offset,
    isLoading,
    characters,
    totalCharacters,
    handleChangeFilter,
    handleChangeOffset,
  } = useHome();

  return (
    <>
      <Main
        characters={characters}
        filter={filter}
        setFilter={handleChangeFilter}
      />
      <Pagination
        total={totalCharacters}
        offset={offset}
        onChange={handleChangeOffset}
      />
      <Loader isLoading={isLoading} />
    </>
  );
};
