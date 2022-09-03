import { useQuery } from "react-query";
import { api } from "services/api";
import { GetCharactersResult } from "./types";

function removeEmptyParams(params: any) {
  for (const key of Object.keys(params)) {
    if (params[key] === "") {
      delete params[key];
    }
  }
  return params;
}

export async function getCharacters(
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
    characters: data.data.results,
    totalCharacters: data.data.total,
  };
}

const TEN_MINUTES = 1000 * 60 * 10;

export const useCharactersService = (offset: number, filter: string) => {
  return useQuery(
    ["characters", { offset, filter }],
    () => getCharacters(offset, filter),
    {
      staleTime: TEN_MINUTES,
    }
  );
};
