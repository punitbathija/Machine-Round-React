import React, { useEffect, useState } from "react";

const TempratureConveter = () => {
  const [inCelcius, setInCelcius] = useState("");
  const [infahrenheit, setInfahrenheit] = useState("");

  const convertInfahrenheits = () => {
    setInfahrenheit((inCelcius * 9) / 5 + 32);
  };

  const convertInCelcius = () => {
    setInCelcius((infahrenheit - 32) * (5 / 9));
  };

  useEffect(() => {}, [inCelcius, infahrenheit]);

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
      <span>Enter in fahrenheit </span>
      <input
        onChange={(e) => setInfahrenheit(e.target.value)}
        value={infahrenheit}
      />
      <br />
      <button onClick={convertInCelcius}>Convert In Celcius</button>
      {inCelcius && <p>{inCelcius}°</p>}
      <button onClick={convertInfahrenheits}>Convert In fahrenheit</button>
      {infahrenheit && <p>{infahrenheit} °F</p>}
    </div>
  );
};

export default TempratureConveter;
