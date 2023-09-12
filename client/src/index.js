import React from "react";
// import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { LoginProvider } from "./components/LoginContext"; // Import the LoginProvider

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    
      <App />
    
  </BrowserRouter>
);
