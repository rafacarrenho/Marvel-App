import { CharacterModel, CharacterDTO } from "./types";

export const characterModel = (character: CharacterDTO): CharacterModel => {
  return {
    id: character.id,
    name: character.name,
    events: character.events.items,
    series: character.series.items,
    stories: character.stories.items,
    image: `${character.thumbnail.path.replace("http://", "https://")}.${
      character.thumbnail.extension
    }`,
  };
};
