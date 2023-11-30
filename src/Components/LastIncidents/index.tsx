import * as S from "./styles";
import dependencies from "../../dependencies";

interface IServiceIconCardProps {
  local?: string;
  evento?: Array<string>;
  value?: Array<string>;
}
const LastIncidents = ({ local, evento, value }: IServiceIconCardProps) => {
  return (
    <S.ContainerBox>
      <S.TitleBox>
        <b>{local}</b>
        <S.SeeButton>See more</S.SeeButton>
      </S.TitleBox>
      <S.IncidentBox>
        <p>{evento ? evento[0] : null}</p>
        <S.IconParagraph>
          {value ? value[0] : null}
          {value ? value[0] === "DOWN" ? <S.RedIcon /> : <S.GreenIcon /> : null}
        </S.IconParagraph>
      </S.IncidentBox>
      <hr />
      <S.IncidentBox>
        <p>{evento ? evento[1] : null}</p>
        <S.IconParagraph>
          {value ? value[1] : null}{" "}
          {value ? value[1] === "DOWN" ? <S.RedIcon /> : <S.GreenIcon /> : null}
        </S.IconParagraph>
      </S.IncidentBox>
      <hr />
      <S.IncidentBox>
        <p>{evento ? evento[2] : null}</p>
        <S.IconParagraph>
          {value ? value[2] : null}{" "}
          {value ? value[2] === "DOWN" ? <S.RedIcon /> : <S.GreenIcon /> : null}
        </S.IconParagraph>
      </S.IncidentBox>
      <hr />
      <S.IncidentBox>
        <p>{evento ? evento[3] : null}</p>
        <S.IconParagraph>
          {value ? value[3] : null}{" "}
          {value ? value[3] === "DOWN" ? <S.RedIcon /> : <S.GreenIcon /> : null}
        </S.IconParagraph>
      </S.IncidentBox>
    </S.ContainerBox>
  );
};

export { LastIncidents };
