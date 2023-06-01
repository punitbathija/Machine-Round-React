import React, { useState } from "react";

const TempratureConveter = () => {
  const [inCelcius, setInCelcius] = useState("");
  const [inFarinite, setInFarinite] = useState("");
  return (
    <div>
      <h1>Om Namo Shivay</h1>
      <p>Enter in Celcius</p>
      <input onChange={(e) => e.target.value} value={inCelcius} />
    </div>
  );
};

export default TempratureConveter;
