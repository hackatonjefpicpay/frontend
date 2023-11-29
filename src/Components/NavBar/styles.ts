import styled, { css } from "styled-components";
import { Box, Button } from "@mui/material";

export const NavBarContainer = styled(Box)`
  width: 18%;
  height: calc(100vh - 90vh);
  background-color: #097e47;
  height: 100vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const LogoImage = styled("img")`
  width: 65%;
`;

export const NavText = styled("h2")`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem;
  background-color: #ffffff40;
  width: 100%;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    background-color: #ffffff30;
  }
`;

export const NavButton = styled(Button)(
  () => css`
    && {
      font-size: 1.8rem;
      width: 100%;
      background-color: #ffffff40;
      border-radius: 10px;
    }
  `
);
