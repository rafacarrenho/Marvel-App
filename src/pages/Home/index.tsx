import { Loader } from "components/Loader";
import { Main } from "components/Main";
import { Navigate } from "components/Navigate";
import { useHome } from "contexts/HomeContext";
import { useCharacters } from "services/characters/useCharacters";

export const Home = () => {
  const { filter, setFilter, offset, setOffset, debouncedFilter } = useHome();

  const { data, isLoading } = useCharacters(offset, debouncedFilter);

  const characters = data?.characters;
  const totalCharacters = data?.totalCharacters || 0;

  const handleChangeOffset = (value: number) => {
    setOffset(value);
  };

  const handleChangeFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <>
      <Main
        characters={characters}
        filter={filter}
        setFilter={handleChangeFilter}
      />
      <Navigate
        total={totalCharacters}
        offset={offset}
        onChange={handleChangeOffset}
      />
      <Loader isLoading={isLoading} />
    </>
  );
};
