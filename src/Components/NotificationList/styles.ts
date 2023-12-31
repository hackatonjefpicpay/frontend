import styled from "styled-components";
import { Box } from "@mui/material";

export const ContainerBox = styled(Box)`
  color: white;
  background: var(
    --gradient,
    linear-gradient(101deg, #272727 1.82%, #161616 99.91%)
  );
  width: 80%;
  display: flex;
  flex-direction: column;
  /* border-radius: 20px; */
  height: 80vh;
  overflow-y: auto;
  margin: 3rem auto;

`;

export const TitleBox = styled(Box)`
  background-color: #212121;
  display: flex;
  justify-content: center;
  font-weight: 400;
  width: 100%;
  padding: 20px;
  font-size: 24px;
`

export const Title = styled('p')`
  font-weight: 600;
  font-size: 1rem;
`

export const RowContainer = styled(Box)`
  border-bottom: 2px solid gray;
  display: flex;
  height: 90px;
  flex-direction: column;
  gap: 1rem;
  padding: 10px;
`

export const  LittleRowStatus = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`
export const ContainerStatus = styled(Box)`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

export const TextNotification = styled('p')`
  font-size: 16px;
`

export const CircleStatus = styled(Box)`
  width: 15px;
  height: 15px;
  border-radius: 30px;
  
`