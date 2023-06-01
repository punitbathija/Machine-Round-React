import React, { useState } from "react";

const TempratureConveter = () => {
  const [inCelcius, setInCelcius] = useState("");
  const [inFarinite, setInFarinite] = useState("");
  return (
    <div>
      <h1>Om Namo Shivay</h1>
      <span>Enter in Celcius </span>
      <input onChange={(e) => e.target.value} value={inCelcius} />
      <br />
      <span>Enter in Farinite </span>
      <input onChange={(e) => e.target.value} value={inFarinite} />
    </div>
  );
};

export default TempratureConveter;
