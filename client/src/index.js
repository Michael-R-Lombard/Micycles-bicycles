import React from "react";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { BikeProvider } from "./context/bike";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BikeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BikeProvider>
);
