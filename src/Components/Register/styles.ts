import styled, { css } from "styled-components";
import { Box, Button, Input } from "@mui/material";

export const ContainerBox = styled(Box)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: #36454F;
`;
export const SmallContainer = styled(Box)`
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PrincipalCard = styled(Box)`
  width: 40%;
  height: 90%;
  background: var(
    --gradient,
    linear-gradient(101deg, #272727 1.82%, #161616 99.91%)
  );
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  gap: 30px
`;
export const SecondaryCard = styled(Box)`
  width: 100%;
  height: 20%;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
export const InputCard = styled(Box)`
  width: 100%;
  height: 80%;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  color: #ffffff;
`;
export const Inputs = styled(Input)`
  width: 100%;
  height: 35%;
  background-color: white;
  &:hover {
    box-shadow: 1px 1px 10px 1px #ffffff;
  }
`;