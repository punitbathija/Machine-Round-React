import React, { useState } from "react";

const Tc = () => {
  const [inCelcius, setInCelcius] = useState("");
  const [inFahrenheit, setInFahrenheit] = useState("");

  const convertToCelcius = () => {
    setInCelcius(((inFahrenheit - 32) * 5) / 9);
  };

  const convertInFahrenheits = () => {
    setInFahrenheit((inCelcius * 9) / 5 + 32);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <p>Enter in Celcius</p>
      <input
        type="number"
        onChange={(e) => setInCelcius(e.target.value)}
        value={inCelcius}
      />
      <p>Enter in Fahrenheit</p>
      <input
        type="number"
        onChange={(e) => setInFahrenheit(e.target.value)}
        value={inFahrenheit}
      />
      <button>Convert to Celcius</button>
    </div>
  );
};

export default Tc;
