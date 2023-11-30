import * as S from "./styles";

import { IconCard } from "../IconCard";
import { useState } from "react";
import dependencies from "../../dependencies";

import { useNavigate } from "react-router-dom";

interface IServiceMainCardProps {
  serviceName?: string;
  place?: string;
  status?: number;
  urlNavigate?: string;
}

const ServiceMainCard = ({
  serviceName,
  status,
  place,
  urlNavigate,
}: IServiceMainCardProps) => {
  const [lastCall, setLastCall] = useState<Date>(new Date());

  const navigate = useNavigate();

  return (
    <>
      <S.CardContainer onClick={() => navigate(urlNavigate!)}>
        <S.ServiceInfoContainer>
          <S.ServiceStatus>Serviço: {serviceName}</S.ServiceStatus>
          <S.ServiceStatus>Local: {place}</S.ServiceStatus>
          <S.ServiceStatus>
            Atualização: {dependencies.moment(lastCall).format("HH:mm:ss")}
          </S.ServiceStatus>
        </S.ServiceInfoContainer>
        {status === 1 ? (
          <IconCard value={"sucess"} />
        ) : status === 2 ? (
          <IconCard value={"warning"} />
        ) : (
          status === 3 && <IconCard value={"error"} />
        )}
      </S.CardContainer>
    </>
  );
};

export { ServiceMainCard };
