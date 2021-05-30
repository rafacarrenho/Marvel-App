import axios from "axios";
import md5 from "md5";
import React, { createContext, useCallback, useContext, useState } from "react";

export const CharactersContext = createContext({});

export const PlayerContextProvider = ({ children }) => {
  const [finder, setFinder] = useState("");
  const [characters, setCharacters] = useState(null);
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

    const params = () => {
      let result = {
        apikey: process.env.REACT_APP_MARVEL_PUBLIC_KEY,
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
      params: params(offset, timestamp, hash),
    });
    setTotal(res.data.data.total);
    setCharacters(res.data.data.results);

    setIsLoading(false);
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        finder,
        setCharacters,
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
