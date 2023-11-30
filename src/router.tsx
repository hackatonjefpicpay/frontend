import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { OracleDetails } from "./Pages/OracleDetails";

const AppRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/oracle" element={<OracleDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
