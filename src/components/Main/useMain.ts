import { useNavigate } from "react-router-dom";

export const useMain = () => {
  const navigate = useNavigate();

  const handleCharacter = (id: number) => {
    navigate(`/personagem/${id}`);
  };

  return { handleCharacter };
};
