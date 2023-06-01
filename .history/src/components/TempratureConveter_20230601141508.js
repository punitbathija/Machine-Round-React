import React, { useEffect, useState } from "react";

const TempratureConveter = () => {
  const [inCelcius, setInCelcius] = useState("");
  const [inFarinite, setInFarinite] = useState("");

  const convertInFarinites = () => {
    setInFarinite((inCelcius * 9) / 5 + 32);
  };

  const convertInCelcius = () => {
    setInCelcius((inFarinite - 32) * (5 / 9));
  };

  //   useEffect(() => {}, [inCelcius, inFarinite]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <span>Enter in Celcius </span>
      <input onChange={(e) => setInCelcius(e.target.value)} value={inCelcius} />
      <br />
      <span>Enter in Farinite </span>
      <input
        onChange={(e) => setInFarinite(e.target.value)}
        value={inFarinite}
      />
      <br />
      <button onClick={convertInCelcius}>convert In Celcius</button>
      <button onClick={convertInFarinites}>convert In Farinite</button>
    </div>
  );
};

export default TempratureConveter;
