import React, { useEffect } from "react";
import { Main } from "../../components/Main";
import { Navigate } from "../../components/Navigate";
import { useCharacters } from "../../contexts/CharactersContext";

export const Home = () => {
  const { fetchData, finder, setOffset } = useCharacters();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(0);
      fetchData({ finder });
    }, 400);

    return () => clearTimeout(timer);
  }, [fetchData, finder, setOffset]);

  return (
    <>
      <Main />
      <Navigate />
    </>
  );
};
