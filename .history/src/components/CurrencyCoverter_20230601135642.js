import React, { useState } from "react";

const CurrencyCoverter = () => {
  const [amount, setAmount] = useState(0);
  const [inDollars, setInDollars] = useState(0);
  const [inPounds, setInPounds] = useState(0);

  const convertToDollar = () => {
    Math.round(setInDollars(amount / 82.5));
    setAmount("");
  };

  const convertToPounds = () => {
    Math.round(setInPounds(amount / 102.4));
    setAmount("");
  };

  const convert = () => {
    convertToDollar();
    convertToPounds();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <p>Enter in Rupees</p>
      <input
        name="inRupees"
        type="number"
        placeholder="enter amount"
        style={{ textAlign: "center" }}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      {/* <button onClick={convertToDollar}>In $</button>
      <button onClick={convertToPounds}>In £</button> */}
      <button onClick={convert}>Convert</button>
      <br />
      {inDollars && <p>In ${inDollars}</p>}
      {inPounds && <p>In £{inPounds}</p>}
    </div>
  );
};

export default CurrencyCoverter;
