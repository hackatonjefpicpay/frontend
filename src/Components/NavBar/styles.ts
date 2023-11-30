import styled, { css } from "styled-components";
import { Box, Button } from "@mui/material";

export const NavBarContainer = styled(Box)`
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0 0 0;
  height: 8vh;
`;

export const LogoContainer = styled(Box)`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const LogoImage = styled("img")`
  height: 100%;
`;
