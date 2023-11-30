import * as S from "./styles";

import { IconCard } from "../IconCard";

interface IServiceMainCardProps {
  serviceName?: string;
  place?: string;
  status?: number;
}

const ServiceMainCard = ({ serviceName, status, place }: IServiceMainCardProps) => {
  return (
    <>
      <S.CardContainer>
        <S.ServiceInfoContainer>
          <S.ServiceStatus>Serviço: {serviceName}</S.ServiceStatus>
          <S.ServiceStatus>Local: {place}</S.ServiceStatus>
          <S.ServiceStatus>Desde: {"29/11/2023"}</S.ServiceStatus>
        </S.ServiceInfoContainer>
        {status === 1 ? (
          <IconCard value={"sucess"} />
        ) : status === 2 ? (
          <IconCard value={"warning"} />
        ) : (
          status === 3 && (
            <IconCard value={"error"} />
          )
        )}
      </S.CardContainer>
    </>
  );
};

export { ServiceMainCard };
