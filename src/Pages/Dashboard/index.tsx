import dependencies from "../../dependencies";
import * as S from "./style";
import { NavBar } from "../../Components/NavBar";
import { ServiceMainCard } from "../../Components/ServiceMainCard";
import { LastIncidents } from "../../Components/LastIncidents";
import { useEffect } from "react";

const servicesList = [
  {
    name: "AWS",
    place: "São Paulo",
    status: 1,
    local: "AWS São Paulo Last Incidents",
    evento: [
      "Account Management",
      "Account Management",
      "Account Management",
      "Account Management",
    ],
    value: ["DOWN", "UP", "UP", "DOWN"],
  },
  {
    name: "Jira",
    place: "São Paulo",
    status: 2,
    local: "AWS São Paulo Last Incidents",
    evento: [
      "Account Management",
      "Account Management",
      "Account Management",
      "Account Management",
    ],
    value: ["DOWN", "UP", "UP", "DOWN"],
  },
  {
    name: "Oracle",
    place: "São Paulo",
    status: 3,
    local: "AWS São Paulo Last Incidents",
    evento: [
      "Account Management",
      "Account Management",
      "Account Management",
      "Account Management",
    ],
    value: ["DOWN", "UP", "UP", "DOWN"],
  },
];

const Dashboard = () => {
  return (
    <>
      <S.PageWrapper>
        <NavBar />
        <S.InfoContainer>
          {servicesList.map((service) => {
            return (
              <S.ServiceCardGrid>
                <ServiceMainCard
                  key={service.name}
                  serviceName={service.name}
                  status={service.status}
                />
                <LastIncidents local={service.local} evento={service.evento} value={service.value} />
              </S.ServiceCardGrid>
            );
          })}
        </S.InfoContainer>
        <S.InfoContainerKPI>
          <p>KPIAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
        </S.InfoContainerKPI>
      </S.PageWrapper>
    </>
  );
};

export { Dashboard };
