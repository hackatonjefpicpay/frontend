import styled, { css } from "styled-components";
import { Box, Button } from "@mui/material";

export const NavBarContainer = styled(Box)`
  width: 100%;
  height: 8vh;
  background-color: #000000;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute
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

export const NavText = styled("h2")`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem;
  background-color: #ffffff40;
  height: 100%;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    background-color: #ffffff30;
    width: 115%;
    box-shadow: 2px 2px 10px 2px #11c76f;
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
