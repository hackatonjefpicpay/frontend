import dependencies from "../../dependencies";
import * as S from "./style";
import { NavBar } from "../../Components/NavBar";
import { ServiceMainCard } from "../../Components/ServiceMainCard";
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
