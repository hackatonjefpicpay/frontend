import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Register } from "./Components/Register";

const AppRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
