import styled from "styled-components";
import { Box } from "@mui/material";

export const CardContainer = styled(Box)`
  height: 15rem;
  width: 30rem;
  background: var(
    --gradient,
    linear-gradient(101deg, #272727 1.82%, #161616 99.91%)
  );
  border-radius: 30px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ServiceInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;

export const ServiceStatus = styled("p")`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
`;
