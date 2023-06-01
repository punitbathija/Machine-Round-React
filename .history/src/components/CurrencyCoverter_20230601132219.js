import React, { useState } from "react";

const CurrencyCoverter = () => {
  const [amount, setAmount] = useState(0);
  const [inDollars, setInDollars] = useState(0);
  const [inPounds, setInPounds] = useState(0);

  const convertToDollar = () => {
    setInDollars(amount / 82.5);
  };

  const convertToPounds = () => {
    setInPounds(amount / 102.4);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <input
        type="number"
        placeholder="enter amount"
        style={{ textAlign: "center" }}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={convertToDollar}>In $</button>
      <button onClick={convertToDollar}>In £</button>
      <br />
      {inDollars && <p>${inDollars}</p>}
      {inPounds && <p>{inPounds}</p>}
    </div>
  );
};

export default CurrencyCoverter;
