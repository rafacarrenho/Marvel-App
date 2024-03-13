import { useHomeContext } from "contexts/HomeContext";
import { useCharactersService } from "services/characters/useCharactersService";

const useHome = () => {
  const { filter, setFilter, offset, debouncedFilter, currentPage, limit } =
    useHomeContext();

  const { data, isLoading } = useCharactersService(offset, debouncedFilter);

  const characters = data?.characters;
  const totalCharacters = data?.totalCharacters || 0;

  const handleChangeFilter = (value: string) => {
    setFilter(value);
  };

  return {
    limit,
    filter,
    isLoading,
    characters,
    currentPage,
    totalCharacters,
    handleChangeFilter,
  };
};

export { useHome };
