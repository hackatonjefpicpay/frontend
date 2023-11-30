import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Pages/Dashboard";
import { Teste } from "./Pages/TesteUrls";

const AppRouter = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
