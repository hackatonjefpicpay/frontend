import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import GlobalStyles from "./Styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRouter />
  </React.StrictMode>
);
