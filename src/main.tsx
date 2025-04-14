import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom"; // 👈 Importá esto
import "./index.css"; // 👈 Importá el CSS de tu App
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter> {/* 👈 Envolvé tu App acá */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
