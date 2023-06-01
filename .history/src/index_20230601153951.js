import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter";
import "./index.css";
import ProgressBar from "./components/ProgressBar";
import CurrencyCoverter from "./components/CurrencyCoverter";
import TempratureConveter from "./components/TempratureConveter";
import Tc from "./components/
Tc";
// import FetchApi from "./components/FetchApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className="text-center">Interview Practise</h1>
    {/* <Counter /> */}
    {/* <FetchApi /> */}
    {/* <ProgressBar /> */}
    {/* <CurrencyCoverter /> */}
    {/* <TempratureConveter /> */}
    <Tc />
  </>
);
