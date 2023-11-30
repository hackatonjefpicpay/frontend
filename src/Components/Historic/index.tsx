import * as S from "./styles";

interface IServiceIconCardProps {
  local?: string;
  data?: any;
}
const Historic = ({ local, data }: IServiceIconCardProps) => {
  let dataNormalizada = data;

  if (data?.length > 0) {
    dataNormalizada = data[1];
  }

  return (
    <S.ContainerBox>
      <S.TitleBox>
        <b>{local}</b>
        <b>Status</b>
      </S.TitleBox>
      {data.map((incident: any) => {
        return (
          <S.IncidentBox>
            <p>{incident?.name}</p>
            <S.IconParagraph>
              {incident?.status ? incident?.status : "Não Informado"}
              {incident?.status.toLowerCase() == "resolved" ? (
                <S.GreenIcon />
              ) : incident?.status == "postmortem" ? (
                <S.YellowIcon />
              ) : (
                <S.RedIcon />
              )}
            </S.IconParagraph>
          </S.IncidentBox>
        );
      })}
    </S.ContainerBox>
  );
};

export { Historic };
