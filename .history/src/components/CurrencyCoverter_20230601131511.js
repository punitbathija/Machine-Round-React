import React, { useState } from "react";

const CurrencyCoverter = () => {
  const [amount, setAmount] = useState(0);
  const [inDollars, setInDollars] = useState(0);
  const [inPounds, setInPounds] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <input
        type="number"
        placeholder="enter amount"
        style={{ textAlign: "center" }}
        value={amount}
      />
      <button>In $</button>
    </div>
  );
};

export default CurrencyCoverter;
