import { useDebounce } from "hooks/useDebounce";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

export type HomeContextType = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  offset: number;
  debouncedFilter: string;
  currentPage: number;
  limit: number;
};

export const HomeContext = createContext<HomeContextType>(
  {} as HomeContextType
);

type HomeContextProviderProps = {
  children: ReactNode;
};

export const HomeContextProvider: React.FC<HomeContextProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState("");
  const [searchParams] = useSearchParams();

  const debouncedFilter = useDebounce(filter, 400);
  const currentPage = Number(searchParams.get("page")) || 1;
  const limit = 10;
  const offset = (currentPage - 1) * limit;

  return (
    <HomeContext.Provider
      value={{
        filter,
        setFilter,
        currentPage,
        limit,
        offset,
        debouncedFilter,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  return useContext(HomeContext);
};
