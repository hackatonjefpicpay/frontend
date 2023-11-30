import styled from "styled-components";
import { Box } from "@mui/material";

export const PageWrapper = styled(Box)`
  width: 100%;
  display: flex;
`;

export const InfoContainer = styled(Box)`
  width: 70%;
  height: 100vh;
  background-color: #000000;
  padding: 3rem;
  overflow: scroll;
  overflow-x: hidden;
`;
export const InfoContainerKPI = styled(Box)`
  width: 30%;
  height: 100vh;
  padding-top: 80px;
`;

export const ServiceCardGrid = styled(Box)`
  width: 45%;
  float: left;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 5%;
  margin-right: 5%;
`;
