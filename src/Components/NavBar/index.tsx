import * as S from "./styles";
import logoSvg from "../../Assets/Images/logoSvg.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <S.NavBarContainer>
        <S.LogoContainer>
          <S.LogoImage
            src={logoSvg}
            alt="Logo da empresa Line"
            onClick={() => {
              if (window.location.pathname != "/") {
                navigate("/");
              } else {
                window.location.reload();
              }
            }}
          />
        </S.LogoContainer>
      </S.NavBarContainer>
    </>
  );
};

export { NavBar };
