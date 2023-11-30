import { useEffect, useState } from "react";
import { NavBar } from "../../Components/NavBar";
import { InfoContainer, PageWrapper } from "../Dashboard/style";
import { GetJiraData, GetJiraStatus } from "../../Services/utils";
import { Loading } from "../../Components/Loading";
import { LastIncidents } from "../../Components/LastIncidents";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const JiraDetails = () => {
  const [showLoading, setShowLoading] = useState(true);

  const [jiraServices, setJiraServices] = useState<any>([]);
  const [jiraServicesStatus, setJiraServicesStatus] = useState<any>();

  const GetJira = async () => {
    const response = await GetJiraData();
    setJiraServices(response?.components);
  };

  const GetJiraStatusQuery = async () => {
    const response = await GetJiraStatus();
    setJiraServicesStatus(response);
  };

  useEffect(() => {
    GetJira();
    GetJiraStatusQuery();
    setTimeout(() => setShowLoading(false), 1000);
  }, []);

  if (showLoading) {
    return <Loading />;
  }

  return (
    <>
      <PageWrapper>
        <NavBar />
        <InfoContainer>
          <LastIncidents local="Jira" data={jiraServicesStatus} />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Detalhes dos serviços do Jira</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        Service Name
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        Service Status
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                      >
                        Service Color
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {jiraServices.map((row: any) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="center">{row.status} </TableCell>
                        <TableCell align="center">
                          {row.status === "operational" ? (
                            <CheckCircleIcon color="success" />
                          ) : row.status === "partial_outage" ? (
                            <ReportProblemIcon color="warning" />
                          ) : row.status === "major_outage" ? (
                            <ErrorIcon color="error" />
                          ) : (
                            "-"
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </InfoContainer>
      </PageWrapper>
    </>
  );
};

export { JiraDetails };
