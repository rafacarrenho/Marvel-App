import * as S from "./styles";
import { CharactersListProps } from "./types";

export const CharactersList = ({ characters }: CharactersListProps) => {
  if (!characters) return <></>;

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.TitleItem>Personagens</S.TitleItem>
        <S.TitleItem>Serie</S.TitleItem>
        <S.TitleItem>Eventos</S.TitleItem>
      </S.TitleWrapper>

      <S.CharacterWrapper>
        {characters.map((character) => (
          <S.CharacterItem key={character.id}>
            <S.CharacterLink to={`/personagem/${character.id}`}>
              <S.ImageWrapper>
                <S.CharacterImage
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={`Foto do personagem: ${character.name}`}
                  height={48}
                  width={48}
                />
                <strong>{character.name}</strong>
              </S.ImageWrapper>
              <S.SeriesWrapper>
                {character.series.items.slice(0, 3).map((serie) => (
                  <S.CharacterInfo key={serie.name}>
                    {serie.name}
                  </S.CharacterInfo>
                ))}
              </S.SeriesWrapper>
              <S.EventsWrapper>
                {character.events.items.slice(0, 3).map((event) => (
                  <S.CharacterInfo key={event.name}>
                    {event.name}
                  </S.CharacterInfo>
                ))}
              </S.EventsWrapper>
            </S.CharacterLink>
          </S.CharacterItem>
        ))}
      </S.CharacterWrapper>
    </S.Wrapper>
  );
};
