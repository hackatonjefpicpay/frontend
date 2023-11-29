import dependencies from "../../dependencies";
import {LineChart} from "../../Components/lineChart";
import { Log } from "../../Components/log";

const Dashboard = () => {
  const teste = dependencies.axios
    .get("https://ocistatus.oraclecloud.com/api/v2/components.json")
    .then((resp) => {
      console.log(resp.data);
    });
  return (
    <>
      <div>
        <LineChart />
      </div>
    </>
  );
};

export { Dashboard };
