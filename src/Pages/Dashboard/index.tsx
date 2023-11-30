import * as S from "./style";
import { NavBar } from "../../Components/NavBar";
import { ServiceMainCard } from "../../Components/ServiceMainCard";
import { Loading } from "../../Components/Loading";
import {
  GetOracleData,
  GetJiraData,
  GetOracleStatus,
  GetJiraStatus,
} from "../../Services/utils";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [oracleServices, setOracleServices] = useState<any>([]);
  const [jiraServices, setJiraServices] = useState<any>();

  const GetOracle = async () => {
    const response = await GetOracleData();
  };

  const GetJira = async () => {
    const response = await GetJiraData();
  };

  const GetOracleStatusQuery = async () => {
    const response = await GetOracleStatus();
    let dados = Object.entries(response);
    setOracleServices(dados);
  };

  const GetJiraStatusQuery = async () => {
    const response = await GetJiraStatus();
    setJiraServices(response);
  };

  useEffect(() => {
    GetOracle();
    GetJira();
    GetOracleStatusQuery();
    GetJiraStatusQuery();

    setTimeout(() => setShowLoading(false), 1000);
  }, []);

  if (showLoading) {
    return <Loading />;
  }

  return (
    <>
      <S.PageWrapper>
        <NavBar />
        <S.InfoContainer>
          <S.ServicesStatusContainer>
            <S.ServiceStatus>Oracle:</S.ServiceStatus>
            <S.ServiceCardGrid>
              {oracleServices.map((service: any) => {
                return (
                  <ServiceMainCard
                    key={service[0]}
                    serviceName={"Oracle"}
                    status={
                      service[1]?.percentualNormal == "100.0%"
                        ? 1
                        : service[1]?.percentualDown == "100.0%"
                        ? 3
                        : 2
                    }
                    place={service[0]}
                  />
                );
              })}
            </S.ServiceCardGrid>
          </S.ServicesStatusContainer>
          <S.ServicesStatusContainer>
            <S.ServiceStatus>Jira:</S.ServiceStatus>
            <S.ServiceCardGrid>
              <ServiceMainCard
                key={"JiraService"}
                serviceName={"Jira"}
                status={
                  jiraServices?.up === 100
                    ? 1
                    : jiraServices?.down === 100
                    ? 3
                    : 2
                }
                place={"-"}
              />
            </S.ServiceCardGrid>
          </S.ServicesStatusContainer>
        </S.InfoContainer>
      </S.PageWrapper>
    </>
  );
};

export { Dashboard };
