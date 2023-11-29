import dependencies from "../../dependencies";
import {LineChart} from "../../Components/lineChart";
import { Log } from "../../Components/log";
import * as S from "./style";
import { NavBar } from "../../Components/NavBar";

const Dashboard = () => {
  return (
    <>
      <S.PageWrapper>
        <NavBar />
        <S.InfoContainer></S.InfoContainer>
      </S.PageWrapper>
    </>
  );
};

export { Dashboard };
