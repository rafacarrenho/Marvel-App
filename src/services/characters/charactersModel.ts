import { CharactersModel, CharactersDTO } from "./types";

export const charactersModel = (character: CharactersDTO): CharactersModel => {
  return {
    id: character.id,
    name: character.name,
    events: character.events.items.slice(0, 3),
    series: character.series.items.slice(0, 3),
    image: `${character.thumbnail.path.replace("http://", "https://")}.${
      character.thumbnail.extension
    }`,
  };
};
