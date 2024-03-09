import * as S from "./styles";
import { FaSearch } from "react-icons/fa";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};
export const Search = ({ value, onChange }: SearchProps) => {
  return (
    <S.SearchForm>
      <S.SearchLabel>Nome do personagem</S.SearchLabel>
      <S.SearchInputWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search"
          id="finder"
          name="finder"
          value={value}
          onChange={({ target }) => onChange(target.value)}
        />
        <FaSearch />
      </S.SearchInputWrapper>
    </S.SearchForm>
  );
};
