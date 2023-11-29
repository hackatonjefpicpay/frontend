import * as S from "./styles";
import logoSvg from "../../Assets/Images/logoSvg.svg";

const NavBar = () => {
  return (
    <>
      <S.NavBarContainer>
        <S.LogoContainer>
          <S.LogoImage src={logoSvg} alt="Logo da empresa Line" />
        </S.LogoContainer>
      </S.NavBarContainer>
    </>
  );
};

export { NavBar };
