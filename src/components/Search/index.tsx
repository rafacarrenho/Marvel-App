import * as S from "./styles";
import { FaSearch } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { SearchProps } from "./types";

export const Search = ({ value, onChange }: SearchProps) => {
  const handleClear = () => onChange("");
  return (
    <S.SearchForm>
      <S.SearchLabel htmlFor="finder">Nome do personagem</S.SearchLabel>
      <S.SearchInputWrapper>
        <S.SearchInput
          type="text"
          placeholder="Nome do Personagem"
          id="finder"
          name="finder"
          value={value}
          onChange={({ target }) => onChange(target.value)}
        />
        {value ? (
          <CgClose size={18} onClick={handleClear} />
        ) : (
          <FaSearch size={16} />
        )}
      </S.SearchInputWrapper>
    </S.SearchForm>
  );
};
