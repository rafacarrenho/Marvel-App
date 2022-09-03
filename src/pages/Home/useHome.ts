import { useHomeContext } from "contexts/HomeContext";
import { useCharactersService } from "services/characters/useCharactersService";

const useHome = () => {
  const { filter, setFilter, offset, setOffset, debouncedFilter } =
    useHomeContext();

  const { data, isLoading } = useCharactersService(offset, debouncedFilter);

  const characters = data?.characters;
  const totalCharacters = data?.totalCharacters || 0;

  const handleChangeOffset = (value: number) => {
    setOffset(value);
  };

  const handleChangeFilter = (value: string) => {
    setFilter(value);
  };

  return {
    filter,
    offset,
    isLoading,
    characters,
    totalCharacters,
    handleChangeFilter,
    handleChangeOffset,
  };
};

export { useHome };
