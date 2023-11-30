import * as S from "./style";
import { NavBar } from "../../Components/NavBar";
import { ServiceMainCard } from "../../Components/ServiceMainCard";
import { Loading } from "../../Components/Loading";
import { GetOracleStatus, GetJiraStatus, GetOracleHistoric, GetJiraHistoric } from "../../Services/utils";
import { useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

import { NotificationList } from "../../Components/NotificationList";
import axios from "axios";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<
    "success" | "error" | "warning" | "info"
  >("success");

  function showNotification(
    severity: "success" | "error" | "warning" | "info",
    message: string
  ) {
    axios.get(process.env.REACT_APP_EMAIL_API_URL!)
    setSeverity(severity);
    setMessage(message);
    setOpen(true);
  }

  function returnNotification(platform: string, status: any, oldStatus: any) {
    if (platform === "jira") {
      if (status.donw > oldStatus.donw) {
        showNotification(
          "error",
          `Um serviço da plataforma ${platform} está indiponível. Veja o histórico de incidentes para mais detalhes`
        );
      }

      if (status.donw < oldStatus.donw) {
        showNotification(
          "success",
          `Um serviço da plataforma ${platform} voltou a funcionar adequadamente. Veja o histórico de incidentes para mais detalhes`
        );
      }

      if (status.warn > oldStatus.warn) {
        showNotification(
          "error",
          `Um serviço da plataforma ${platform} está com problema. Veja o histórico de incidentes para mais detalhes`
        );
      }

      if (status.warn < oldStatus.warn) {
        showNotification(
          "success",
          `Um serviço da plataforma ${platform} voltou a funcionar adequadamente. Veja o histórico de incidentes para mais detalhes`
        );
      }
    } else {
      if (status.down > oldStatus.down) {
        showNotification(
          "error",
          `Um serviço da plataforma ${platform} está indiponível. Veja o histórico de incidentes para mais detalhes`
        );

      }

      if (status.down < oldStatus.down) {
        showNotification(
          "success",
          `Um serviço da plataforma ${platform} voltou a funcionar adequadamente. Veja o histórico de incidentes para mais detalhes`
        );
      }

      if (status.warn > oldStatus.warn) {
        showNotification(
          "error",
          `Um serviço da plataforma ${platform} está com problema. Veja o histórico de incidentes para mais detalhes`
        );
      }

      if (status.warn < oldStatus.warn) {
        showNotification(
          "success",
          `Um serviço da plataforma ${platform} voltou a funcionar adequadamente. Veja o histórico de incidentes para mais detalhes`
        );
      }
    }
  }

  function checkCurrentStatus(platform: string, status: any) {
    const now = new Date();
    let oldStatus;

    if (localStorage.getItem(platform)) {
      oldStatus = JSON.parse(localStorage.getItem(platform) || "{}");
    }

    if (platform === "oracle") {
      localStorage.setItem(
        platform,
        JSON.stringify({ updatedAt: now, regions: status })
      );
      if (oldStatus) {
        returnNotification("oracle", status[0][1], oldStatus.regions[0][1]);
      }

      if (oldStatus) {
        returnNotification("oracle", status[1][1], oldStatus.regions[1][1]);
      }
    } else if (platform === "jira") {
      localStorage.setItem(
        platform,
        JSON.stringify({ updatedAt: now, status })
      );
      if (oldStatus) {
        returnNotification("jira", status, oldStatus.status);
      }
    }
  }

  function handleClose() {
    setOpen(false);
  }

  const [showLoading, setShowLoading] = useState(true);
  const [oracleServices, setOracleServices] = useState<any>([]);
  const [jiraServices, setJiraServices] = useState<any>();
  const [oracleUpdatedAt, setOracleUpdatedAt] = useState<Date>()
  const [jiraUpdatedAt, setJiraUpdatedAt] = useState<Date>()
  const [jiraFinishedUpdating, setJiraFinishedUpdating] = useState(true)
  const [oracleFinishedUpdating, setOracleFinishedUpdating] = useState(true)
  

  const GetOracleStatusQuery = async () => {
    setOracleFinishedUpdating(false)
    const response = await GetOracleStatus();
    let dados = Object.entries(response);
    setOracleUpdatedAt(new Date())
    setOracleServices(dados);
    checkCurrentStatus("oracle", dados);
    setOracleFinishedUpdating(true)
  };

  const GetJiraStatusQuery = async () => {
    setJiraFinishedUpdating(false)
    const response = await GetJiraStatus();
    
    setJiraUpdatedAt(new Date())
    setJiraServices(response);
    checkCurrentStatus("jira", response);
    setJiraFinishedUpdating(true)
  };

  function getPlataformsStatus(){
    if (jiraFinishedUpdating){
      GetJiraStatusQuery();
    }
    if (oracleFinishedUpdating){
      GetOracleStatusQuery();
    }
  }

  useEffect(() => {
    getPlataformsStatus()
    localStorage.clear();
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
  useEffect(() => {
    const interval = setInterval(() => {
      getPlataformsStatus()
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (showLoading) {
    return <Loading />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>

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
            <S.ServicesStatusContainer>
              <S.ServiceStatus>AWS:</S.ServiceStatus>
              <S.ServiceCardGrid>
                    <ServiceMainCard
                      serviceName={"AWS"}
                      status={0}
                      place={'-'}
                      urlNavigate="/"
                    />
              </S.ServiceCardGrid>
            </S.ServicesStatusContainer>
          </S.InfoContainer>
          <NotificationList data={fullIncidents}  />
        </S.InfoGrid>
      </S.PageWrapper>
    </>
  );
};

export { Dashboard };
