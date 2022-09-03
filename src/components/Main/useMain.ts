import { useHistory } from "react-router";

export const useMain = () => {
  let history = useHistory();

  const handleCharacter = (id: number) => {
    history.push(`/personagem/${id}`);
  };

  return { handleCharacter };
};
