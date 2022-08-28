type ParticipationItems = {
  name: string;
};

type Participation = {
  items: ParticipationItems[];
};

export type CharacterType = {
  id: number;
  name: string;
  series: Participation;
  stories: Participation;
  events: Participation;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export type GetCharactersResult = {
  characters: CharacterType[];
  totalCharacters: number;
};
