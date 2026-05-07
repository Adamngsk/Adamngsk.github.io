import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { getRouterBasename } from "./utils/routerBase";

const routerBasename = getRouterBasename(import.meta.env.BASE_URL);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename={routerBasename}>
      <App />
    </HashRouter>
  </StrictMode>,
);
