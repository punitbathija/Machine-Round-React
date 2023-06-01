import React, { useEffect, useState } from "react";

const TempratureConveter = () => {
  const [inCelcius, setInCelcius] = useState("");
  const [inFahrenheit, setInFahrenheit] = useState("");

  const convertInFahrenheits = () => {
    setInFahrenheit((inCelcius * 9) / 5 + 32);
  };

  const convertInCelcius = () => {
    setInCelcius((inFahrenheit - 32) * (5 / 9));
  };

  //   useEffect(() => {}, [inCelcius, inFahrenheit]);

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "fit-content",
      }}
    >
      <h1>Om Namo Shivay</h1>
      <span>Enter in Celcius </span>
      <input onChange={(e) => setInCelcius(e.target.value)} value={inCelcius} />
      <br />
      <span>Enter in Fahrenheit </span>
      <input
        onChange={(e) => setInFahrenheit(e.target.value)}
        value={inFahrenheit}
      />
      <br />
      <button onClick={convertInCelcius}>Convert To Celcius</button>
      {inCelcius && <p>{inCelcius}°</p>}
      <button onClick={convertInFahrenheits}>Convert To Fahrenheit</button>
      {inFahrenheit && <p>{inFahrenheit} °F</p>}
    </div>
  );
};

export default TempratureConveter;
