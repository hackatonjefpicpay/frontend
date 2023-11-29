import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";

const AppRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
