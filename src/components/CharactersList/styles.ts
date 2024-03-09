import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 24px 0;
  width: 100%;
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 1em;
`;

export const TitleWrapper = styled.ul`
  display: grid;
  gap: 16px;
  margin-bottom: 16px;

  @media screen and (min-width: 500px) {
    grid-template-columns: 200px 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 240px 2fr 1.5fr;
  }
`;

export const TitleItem = styled.li`
  font-weight: bold;
  color: #555555;
  display: none;

  &:first-of-type {
    display: block;
  }

  @media screen and (min-width: 500px) {
    &:nth-of-type(2) {
      display: block;
    }
  }

  @media screen and (min-width: 900px) {
    &:nth-of-type(3) {
      display: block;
    }
  }
`;

export const CharacterWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;

  strong {
    color: #555555;
  }
`;

export const CharacterImage = styled.img`
  object-fit: cover;
  border-radius: 4px;
  display: block;
`;

export const SeriesWrapper = styled.div`
  display: none;

  @media screen and (min-width: 500px) {
    display: block;
  }
`;

export const EventsWrapper = styled.div`
  display: none;

  @media screen and (min-width: 900px) {
    display: block;
  }
`;

export const CharacterInfo = styled.span`
  display: block;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 24px;
  color: #555555;
`;

export const CharacterItem = styled.li``;

export const CharacterLink = styled(Link)`
  width: 100%;
  text-align: left;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  padding: 4px;
  height: 88px;
  border-radius: 4px;
  align-items: center;
  gap: 16px;
  flex-wrap: nowrap;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f7f7f7;
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: 200px 1fr;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 240px 2fr 1.5fr;
  }
`;
