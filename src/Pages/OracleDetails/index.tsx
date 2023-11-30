import { useEffect, useState } from "react";
import { NavBar } from "../../Components/NavBar";
import { InfoContainer, PageWrapper } from "../Dashboard/style";
import { GetOracleData } from "../../Services/utils";
import { Loading } from "../../Components/Loading";

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

const OracleDetails = () => {
  const [showLoading, setShowLoading] = useState(true);

  const [vinhedoTitle, setVinhedoTitle] = useState<any>();
  const [vinhedoServices, setVinhedoServices] = useState<any>([]);

  const [saoPauloTitle, setSaoPauloTitle] = useState<any>();
  const [saoPauloServices, setSaoPauloServices] = useState<any>([]);

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const GetOracle = async () => {
    const response = await GetOracleData();
    let dados1 = response?.components;
    let dados = Object.entries(dados1);

    let titleVinhedo = dados[1];
    let servicesVinhedo = dados[1];
    setVinhedoTitle(titleVinhedo[0]);
    setVinhedoServices(servicesVinhedo[1]);

    let titleSP = dados[0];
    let servicesSP = dados[0];
    setSaoPauloTitle(titleSP[0]);
    setSaoPauloServices(servicesSP[1]);
  };

  useEffect(() => {
    GetOracle();

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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Detalhes dos serviços: {vinhedoTitle}</Typography>
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
                    {vinhedoServices.map((row: any) => (
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
                          {row.status === "NormalPerformance" ? (
                            <CheckCircleIcon color="success" />
                          ) : row.status === "ServiceDisruption" ? (
                            <ReportProblemIcon color="warning" />
                          ) : row.status === "ServiceDown" ? (
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Detalhes dos serviços: {saoPauloTitle}</Typography>
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
                    {saoPauloServices.map((row: any) => (
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
                          {row.status === "NormalPerformance" ? (
                            <CheckCircleIcon color="success" />
                          ) : row.status === "ServiceDisruption" ? (
                            <ReportProblemIcon color="warning" />
                          ) : row.status === "ServiceDown" ? (
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

export { OracleDetails };
