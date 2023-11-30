import * as S from "./styles";
import dependencies from "../../dependencies";

interface IServiceIconCardProps {
  local?: string;
  data?: any;
}
const LastIncidents = ({ local, data }: IServiceIconCardProps) => {
  let dataNormalizada = data;

  if (data?.length > 0) {
    dataNormalizada = data[1];
  }

  return (
    <S.ContainerBox>
      <S.TitleBox>
        <b>{local}</b>
      </S.TitleBox>
      <S.IncidentBox>
        <p>Serviços em Funcionamento:</p>
        <S.IconParagraph>
          {data?.normal ? data?.normal : dataNormalizada?.normal}
          <S.GreenIcon />
        </S.IconParagraph>
      </S.IncidentBox>
      <hr />
      <S.IncidentBox>
        <p>Serviços Reduzidos:</p>
        <S.IconParagraph>
          {data?.warn ? data?.warn : dataNormalizada?.warn}
          <S.YellowIcon />
        </S.IconParagraph>
      </S.IncidentBox>
      <hr />
      <S.IncidentBox>
        <p>Serviços Parados:</p>
        <S.IconParagraph>
          {dataNormalizada?.down ? dataNormalizada?.down : data?.donw}
          <S.RedIcon />
        </S.IconParagraph>
      </S.IncidentBox>
    </S.ContainerBox>
  );
};

export { LastIncidents };
