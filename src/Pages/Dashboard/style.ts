import styled from "styled-components";
import { Box } from "@mui/material";

export const PageWrapper = styled(Box)`
width: 100%;
`
;

export const InfoGrid = styled(Box)`
display: grid;
  background-color: #050505;
  grid-template-columns: 2fr 1fr;`
  
;

export const InfoContainer = styled(Box)`
  width: 100%;
  background-color: #050505;
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
  text-align: start;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
  width: 100%;
  padding: 10px 20px;
  border-radius: 35px;
  background-color: rgba(217, 217, 217, 0.2);
`
;