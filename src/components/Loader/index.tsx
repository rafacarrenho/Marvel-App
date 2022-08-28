import * as S from "./styles";

type LoaderProps = {
  isLoading: boolean;
};

export const Loader = ({ isLoading }: LoaderProps) => {
  if (!isLoading) return null;
  return (
    <S.Wrapper>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Wrapper>
  );
};
