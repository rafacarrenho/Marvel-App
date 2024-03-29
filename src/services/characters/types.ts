type ParticipationItemsDTO = {
  name: string;
};

type ParticipationDTO = {
  items: ParticipationItemsDTO[];
};

export type CharactersDTO = {
  id: number;
  name: string;
  series: ParticipationDTO;
  events: ParticipationDTO;
  thumbnail: {
    path: string;
    extension: string;
  };
};

type ParticipationModel = {
  name: string;
};

export type CharactersModel = {
  id: number;
  name: string;
  series: ParticipationModel[];
  events: ParticipationModel[];
  image: string;
};

export type GetCharactersResult = {
  characters: CharactersModel[];
  totalCharacters: number;
};
