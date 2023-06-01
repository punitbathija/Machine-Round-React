import React, { useState } from "react";

const Tc = () => {
  const [inCelcius, setInCelcius] = useState("");
  const [inFahrenheit, setInFahrenheit] = useState("");

  const convertToCelcius = () => {
    ((inFahrenheit - 32) * 5) / 9;
  };

  const convertInFahrenheits = () => {
    (inCelcius * 9) / 5 + 32;
  };

  return (
    <div>
      <h1>Om Namo Shivay</h1>
    </div>
  );
};

export default Tc;
