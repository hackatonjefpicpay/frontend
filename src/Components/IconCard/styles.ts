import styled from "styled-components";
import { Box } from "@mui/material";

export const InfoBoxSucess = styled(Box)`
  width: 43%;
  height: 88%;
  border-radius: 100%;
  border: 14px solid #06D84E;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
`;
export const InfoBoxWarning = styled(Box)`
  width: 43%;
  height: 88%;
  border-radius: 100%;
  border: 14px solid #D8C306;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;  
`;
export const InfoBoxError = styled(Box)`
  width: 43%;
  height: 88%;
  border-radius: 100%;
  border: 14px solid #CB0C0C;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;  
`;