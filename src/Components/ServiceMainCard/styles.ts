import styled from "styled-components";
import { Box } from "@mui/material";

export const CardContainer = styled(Box)`
  height: 17rem;
  width: 100%;
  background: var(
    --gradient,
    linear-gradient(101deg, #272727 1.82%, #161616 99.91%)
  );
  border-radius: 30px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (max-width: 1780px) {
    height: 16rem;
  }
`;

export const ServiceInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const ServiceStatus = styled("p")`
  font-weight: 600;
  font-size: 1.5rem;
  color: #fff;
`;
