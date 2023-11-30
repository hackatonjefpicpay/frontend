import dependencies from "../dependencies";

const GetOracleData = async () => {
  try {
    const response = await dependencies.axios.get(
      process.env.REACT_APP_ORACLE_API_URL!
    );
    return response?.data;
  } catch (error) {
    return null;
  }
};

const GetJiraData = async () => {
  try {
    const response = await dependencies.axios.get(
      process.env.REACT_APP_JIRA_API_URL!
    );
    return response?.data;
  } catch (error) {
    return null;
  }
};

const GetOracleStatus = async () => {
  try {
    const response = await dependencies.axios.get(
      process.env.REACT_APP_ORACLE_STATUS_API_URL!
    );
    return response?.data;
  } catch (error) {
    return null;
  }
};

const GetJiraStatus = async () => {
  try {
    const response = await dependencies.axios.get(
      process.env.REACT_APP_JIRA_STATUS_API_URL!
    );
    return response?.data;
  } catch (error) {
    return null;
  }
};

export { GetOracleData, GetJiraData, GetOracleStatus, GetJiraStatus };
