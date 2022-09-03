import { useDebounce } from "hooks/useDebounce";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

export type HomeContextType = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  debouncedFilter: string;
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
  const [offset, setOffset] = useState(0);

  const debouncedFilter = useDebounce(filter, 400);

  useEffect(() => {
    setOffset(0);
  }, [debouncedFilter]);

  return (
    <HomeContext.Provider
      value={{
        filter,
        setFilter,
        offset,
        setOffset,
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
