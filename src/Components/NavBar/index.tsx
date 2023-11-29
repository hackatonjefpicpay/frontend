import * as S from "./styles";
import logoSvg from "../../Assets/Images/logoSvg.svg";

const NavBar = () => {
  return (
    <>
      <S.NavBarContainer>
        <S.LogoImage src={logoSvg} alt="Logo da empresa Line" />
        <S.NavText>Início</S.NavText>
        <S.NavText>AWS</S.NavText>
        <S.NavText>Oracle</S.NavText>
        <S.NavText>Jira</S.NavText>
      </S.NavBarContainer>
    </>
  );
};

export { NavBar };
