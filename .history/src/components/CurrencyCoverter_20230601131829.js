import React, { useState } from "react";

const CurrencyCoverter = () => {
  const [amount, setAmount] = useState(0);
  const [inDollars, setInDollars] = useState(0);
  const [inPounds, setInPounds] = useState(0);

  const convertToDollar = () => {
    setInDollars(amount * 82.5);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <input
        type="number"
        placeholder="enter amount"
        style={{ textAlign: "center" }}
        value={amount}
      />
      <br />
      <br />
      <button>In $</button>
      <button>In £</button>
    </div>
  );
};

export default CurrencyCoverter;
