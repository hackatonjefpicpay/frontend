import * as S from "./styles";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

interface IServiceMainCardProps {
  serviceName?: string;
  status?: number;
}

const ServiceMainCard = ({ serviceName, status }: IServiceMainCardProps) => {
  return (
    <>
      <S.CardContainer>
        <S.ServiceInfoContainer>
          <S.ServiceStatus>Serviço: {serviceName}</S.ServiceStatus>
          <S.ServiceStatus>Desde: {"29/11/2023"}</S.ServiceStatus>
        </S.ServiceInfoContainer>
        {status === 1 ? (
          <CheckCircleOutlineIcon sx={{ fontSize: "10rem" }} color="success" />
        ) : status === 2 ? (
          <ReportProblemIcon sx={{ fontSize: "10rem" }} color="warning" />
        ) : (
          status === 3 && (
            <ErrorOutlineIcon sx={{ fontSize: "10rem" }} color="error" />
          )
        )}
      </S.CardContainer>
    </>
  );
};

export { ServiceMainCard };
