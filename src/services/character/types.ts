type ParticipationItemsDTO = {
  name: string;
};

type ParticipationDTO = {
  items: ParticipationItemsDTO[];
};

export type CharacterDTO = {
  id: number;
  name: string;
  series: ParticipationDTO;
  stories: ParticipationDTO;
  events: ParticipationDTO;
  thumbnail: {
    path: string;
    extension: string;
  };
};

type ParticipationModel = {
  name: string;
};

export type CharacterModel = {
  id: number;
  name: string;
  series: ParticipationModel[];
  stories: ParticipationModel[];
  events: ParticipationModel[];
  image: string;
};
