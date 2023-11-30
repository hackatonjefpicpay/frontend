import styled from "styled-components";
import { Box } from "@mui/material";

export const PageWrapper = styled(Box)`
width: 100%;
`
;

export const InfoGrid = styled(Box)`
display: grid;
  background-color: #000000;
  grid-template-columns: 2fr 1fr;`
  
;

export const InfoContainer = styled(Box)`
  width: 100%;
  background-color: #000000;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  min-height: 92vh;`
;

export const ServiceCardGrid = styled(Box)`
display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  width: 100%;
`
;

export const ServicesStatusContainer = styled(Box)`
display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`
;

export const ServiceStatus = styled("p")`
  text-align: center;
  font-weight: 600;
  font-size: 3rem;
  color: #fff;
`
;