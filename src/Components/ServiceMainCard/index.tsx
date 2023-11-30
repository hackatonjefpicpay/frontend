import * as S from "./styles";

import { IconCard } from "../IconCard";
import { useState } from "react";
import dependencies from "../../dependencies";

interface IServiceMainCardProps {
  serviceName?: string;
  place?: string;
  status?: number;
}

const ServiceMainCard = ({
  serviceName,
  status,
  place,
}: IServiceMainCardProps) => {
  const [lastCall, setLastCall] = useState<Date>(new Date());

  return (
    <>
      <S.CardContainer>
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
