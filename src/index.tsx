import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/app";
import "./index.scss";

const rootContainer = document.getElementById("root");

if (rootContainer) {
  const root = createRoot(rootContainer);

  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
