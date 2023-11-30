import * as S from "./style";
import { NavBar } from "../../Components/NavBar";
import { ServiceMainCard } from "../../Components/ServiceMainCard";
import {
  GetOracleData,
  GetJiraData,
  GetOracleStatus,
  GetJiraStatus,
} from "../../Services/utils";
import { useEffect } from "react";

const servicesList = [
  {
    name: "AWS",
    place: "São Paulo",
    status: 1,
  },
  {
    name: "Jira",
    place: "São Paulo",
    status: 2,
  },
  {
    name: "Oracle",
    place: "São Paulo",
    status: 3,
  },
];

const Dashboard = () => {
  const GetOracle = async () => {
    const response = await GetOracleData();
    console.log(response);
  };

  const GetJira = async () => {
    const response = await GetJiraData();
    console.log(response);
  };

  const GetOracleStatusQuery = async () => {
    const response = await GetOracleStatus();
    console.log(response);
  };

  const GetJiraStatusQuery = async () => {
    const response = await GetJiraStatus();
    console.log(response);
  };

  useEffect(() => {
    GetOracle();
    GetJira();
    GetOracleStatusQuery();
    GetJiraStatusQuery();
  }, []);

  return (
    <>
      <S.PageWrapper>
        <NavBar />
        <S.InfoContainer>
          <S.ServiceCardGrid>
            {servicesList.map((service) => {
              return (
                <ServiceMainCard
                  key={service.name}
                  serviceName={service.name}
                  status={service.status}
                />
              );
            })}
          </S.ServiceCardGrid>
        </S.InfoContainer>
      </S.PageWrapper>
    </>
  );
};

export { Dashboard };
