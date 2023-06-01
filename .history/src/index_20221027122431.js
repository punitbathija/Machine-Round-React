import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className="text-center">Counter</h1>
    <Counter />
  </>
);
