import * as S from "./style";
import { NavBar } from "../../Components/NavBar";
import { ServiceMainCard } from "../../Components/ServiceMainCard";
import { Loading } from "../../Components/Loading";
import { GetOracleStatus, GetJiraStatus } from "../../Services/utils";
import { useEffect, useState } from "react";

import { LastIncidents } from "../../Components/LastIncidents";

const Dashboard = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [oracleServices, setOracleServices] = useState<any>([]);
  const [jiraServices, setJiraServices] = useState<any>();

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
        <S.InfoGrid>
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
                      urlNavigate="oracle"
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
                    jiraServices?.percentualNormal === "100.0%"
                      ? 1
                      : jiraServices?.percentualDown === "100.0%"
                      ? 3
                      : 2
                  }
                  place={"-"}
                  urlNavigate="jira"
                />
              </S.ServiceCardGrid>
            </S.ServicesStatusContainer>
          </S.InfoContainer>
        </S.InfoGrid>
      </S.PageWrapper>
    </>
  );
};

export { Dashboard };
