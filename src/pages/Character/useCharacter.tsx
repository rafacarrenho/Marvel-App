import { useState } from "react";
import { useParams } from "react-router";
import { useCharacterService } from "services/character/useCharacterService";

export enum CharacterTabEnum {
  series = "series",
  events = "events",
  stories = "stories",
}

type CharacterTab = keyof typeof CharacterTabEnum;

type CharacterParams = {
  id: string;
};

export const useCharacter = () => {
  const [activeButton, setActiveButton] = useState<CharacterTab>(
    CharacterTabEnum.series
  );
  let { id } = useParams<CharacterParams>();

  const {
    data: character,
    error,
    isLoading,
  } = useCharacterService(id as string);

  const title = {
    series: "Series",
    events: "Eventos",
    stories: "Histórias",
  };

  return { title, error, isLoading, character, activeButton, setActiveButton };
};
