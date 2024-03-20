import { useQuery } from "react-query";
import { api } from "services/api";
import { CharacterModel } from "./types";
import { characterModel } from "./characterModel";

async function getCharacter(characterId: string): Promise<CharacterModel> {
  const { data } = await api.get(characterId);

  return characterModel(data.data.results[0]);
}

export const useCharacterService = (characterId: string) => {
  return useQuery(["character", characterId], () => getCharacter(characterId));
};
