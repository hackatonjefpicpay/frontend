import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const ContainerBox = styled(Box)`
  color: white;
  background-color: blue;
  width: 30rem;
  display: flex;
  flex-direction: column;
`;
export const TitleBox = styled(Box)`
  padding: 15px;
  background-color: #111111;
  color: white;
  display: flex;
  justify-content: space-between;
`;
export const IncidentBox = styled(Box)`
  padding: 13px;
  color: white;
  display: flex;
  justify-content: space-between;
  background: var(
    --gradient,
    linear-gradient(101deg, #272727 1.82%, #161616 99.91%)
  );
`;
export const SeeButton = styled(Box)`
  color: #486DE8;
  text-decoration: underline;
  cursor: pointer
`;
export const RedIcon = styled(Box)`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;
export const GreenIcon = styled(Box)`
  background-color: green;
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;
export const IconParagraph = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 12px;
`;
