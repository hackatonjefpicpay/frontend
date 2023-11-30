import * as S from "./styles";

import { IconCard } from "../IconCard";
import { useState } from "react";
import dependencies from "../../dependencies";
import manu from '../../Assets/Images/manu.jpg'

import { useNavigate } from "react-router-dom";

interface IServiceMainCardProps {
  serviceName?: string;
  place?: string;
  status?: number;
  urlNavigate?: string;
  lastCall?: Date
}

const ServiceMainCard = ({
  serviceName,
  status,
  place,
  urlNavigate,
  lastCall
}: IServiceMainCardProps) => {

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
        ) : 
          status === 3 ? <IconCard value={"error"} /> : <S.Image src={manu}/>
        }
      </S.CardContainer>
    </>
  );
};

export { ServiceMainCard };
