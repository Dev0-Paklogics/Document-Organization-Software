import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { LoginPage } from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
