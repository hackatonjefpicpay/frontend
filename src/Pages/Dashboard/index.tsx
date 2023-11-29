import dependencies from "../../dependencies";

const Dashboard = () => {
  const teste = dependencies.axios
    .get("https://ocistatus.oraclecloud.com/api/v2/components.json")
    .then((resp) => {
      console.log(resp.data);
    });
  return (
    <>
      <h1>OPA TESTE</h1>
    </>
  );
};

export { Dashboard };
