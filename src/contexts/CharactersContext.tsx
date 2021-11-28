import axios from "axios";
import md5 from "md5";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from "react";

type ParticipationItems = {
  name: string;
};

type Participation = {
  items: Array<ParticipationItems>;
};

export type CharacterType = {
  id: number;
  name: string;
  series: Participation;
  stories: Participation;
  events: Participation;
  thumbnail: {
    path: string;
    extension: string;
  };
};

type FetchDataProps = {
  offset?: number;
  finder: string;
};

export type CharactersContextType = {
  finder: string;
  setFinder: Dispatch<SetStateAction<string>>;
  characters: CharacterType[];
  fetchData: ({ offset, finder }: FetchDataProps) => Promise<void>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  limit: number;
  total: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
};

export const CharactersContext = createContext<CharactersContextType>(
  {} as CharactersContextType
);

type PlayerContextProviderProps = {
  children: ReactNode;
};
export const PlayerContextProvider: React.FC<PlayerContextProviderProps> = ({
  children,
}) => {
  const [finder, setFinder] = useState("");
  const [characters, setCharacters] = useState([]);
  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 10;

  const fetchData = useCallback(async ({ offset, finder }) => {
    setIsLoading(true);
    const timestamp = new Date().getTime().toString();
    const hash = md5(
      `${timestamp}${process.env.REACT_APP_MARVEL_PRIVATE_KEY}${process.env.REACT_APP_MARVEL_PUBLIC_KEY}`
    );

    type Params = {
      apikey: string;
      ts: string;
      hash: string;
      limit: number;
      offset: string;
      nameStartsWith?: string;
    };

    const params = () => {
      let result: Params = {
        apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY!,
        ts: timestamp,
        hash: hash,
        limit: limit,
        offset: offset,
      };

      if (finder) {
        result = { ...result, nameStartsWith: finder };
      }

      return result;
    };

    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}`, {
      params: params(),
    });
    setTotal(res.data.data.total);
    setCharacters(res.data.data.results);

    setIsLoading(false);
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        finder,
        setFinder,
        characters,
        fetchData,
        isLoading,
        setIsLoading,
        limit,
        total,
        offset,
        setOffset,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = () => {
  return useContext(CharactersContext);
};
