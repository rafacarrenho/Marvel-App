import { useQuery } from "react-query";
import { api } from "services/api";
import { CharactersDTO, GetCharactersResult } from "./types";
import { charactersModel } from "./charactersModel";

function removeEmptyParams(params: any) {
  for (const key of Object.keys(params)) {
    if (params[key] === "") {
      delete params[key];
    }
  }
  return params;
}

async function getCharacters(
  offset: number,
  filter: string
): Promise<GetCharactersResult> {
  const { data } = await api.get("", {
    params: removeEmptyParams({
      offset,
      nameStartsWith: filter,
    }),
  });

  return {
    characters: data.data.results.map((value: CharactersDTO) =>
      charactersModel(value)
    ),
    totalCharacters: data.data.total,
  };
}

export const useCharactersService = (offset: number, filter: string) => {
  return useQuery(["characters", { offset, filter }], () =>
    getCharacters(offset, filter)
  );
};
