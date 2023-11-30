import * as S from "./styles";

interface IServiceIconCardProps {
  value?: string;
}
const IconCard = ({ value }: IServiceIconCardProps) => {
  if (value === "sucess") {
    return (
      <S.InfoBoxSucess>
        <h1>UP</h1>
      </S.InfoBoxSucess>
    );
  } else if (value === "warning") {
    return (
      <S.InfoBoxWarning>
        <h1>WARN</h1>
      </S.InfoBoxWarning>
    );
  } else if (value === "error") {
    return (
      <S.InfoBoxError>
        <h1>DOWN</h1>
      </S.InfoBoxError>
    );
  } else {
    return <p>...</p>;
  }
};

export { IconCard };
