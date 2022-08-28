import { useQuery } from "react-query";
import { api } from "services/api";
import { CharacterType } from "./types";

export async function getCharacter(
  characterId: string
): Promise<CharacterType> {
  const { data } = await api.get(characterId);

  return data.data.results[0];
}

const TEN_MINUTES = 1000 * 60 * 10;

export const useCharacter = (characterId: string) => {
  return useQuery(
    ["characters", characterId],
    () => getCharacter(characterId),
    {
      staleTime: TEN_MINUTES,
    }
  );
};
