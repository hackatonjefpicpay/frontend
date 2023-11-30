import * as S from "./style";
import { NavBar } from "../../Components/NavBar";
import { ServiceMainCard } from "../../Components/ServiceMainCard";
import { Loading } from "../../Components/Loading";
import { GetOracleStatus, GetJiraStatus, GetOracleHistoric, GetJiraHistoric } from "../../Services/utils";
import { useEffect, useState } from "react";

import { NotificationList } from "../../Components/NotificationList";

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

  
  const date = new Date()

  const [getOracleIncident,setgetOracleIncident] = useState<any>([]);
  const [getJIRAIncident,setgetJIRAIncident] = useState<any>([]);
  const [getAWSIncident,setgetAWSIncident] = useState<any>([]);

  const [fullIncidents, setFullIncidents] = useState<any>([]);

  const GetOracleIncident = async () => {
      const res = await GetOracleHistoric(date.getMonth());
      let data = Object.entries(res);
      setgetOracleIncident(data);
  };

  const GetJiraIncident = async () => {
      const res = await GetJiraHistoric();
      let data = Object.entries(res);
      setgetJIRAIncident(data);
  };

  useEffect(() => {
      GetOracleIncident();
      GetJiraIncident();
  }, [])

  useEffect(() => {
    // console.log(getOracleIncident);
    // console.log(getJIRAIncident);

    let inc: any = []

    if(getOracleIncident?.length > 0){
      getOracleIncident.map((inci: any) => {
       inc.push(inci)
      })
    }

    if(getJIRAIncident?.length > 0){
      getJIRAIncident.map((inci: any) => {
        inc.push(inci)
      })
    }

    setFullIncidents(inc)

}, [getOracleIncident, getJIRAIncident])

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
            <NotificationList data={fullIncidents}  />  
          </S.InfoContainer>
      </S.PageWrapper>
    </>
  );
};

export { Dashboard };
