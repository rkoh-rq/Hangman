import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EasyHangman from "./hangman/main";
// import MediumHangman from "./hangman/mainm";
// import HardHangman from "./hangman/mainh";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Navibar } from "./hangman/components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Navibar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/easyhangman" element={<EasyHangman />} />
          <Route path="/mediumhangman" element={<EasyHangman />} />
          <Route path="/hardhangman" element={<EasyHangman />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
