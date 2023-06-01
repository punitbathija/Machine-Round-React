import React, { useState } from "react";

export default function Counter() {
  let [count, SetCount] = useState(0);

  const increaseCounter = () => SetCount(count + 1);

  const decreaseCounter = () => (count <= 0 ? "" : SetCount(count - 1));

  const resetCounter = () => SetCount(0);

  return (
    <>
      <div className="container text-center">
        <h1>{count}</h1>
        <button className="btn btn-dark" onClick={increaseCounter}>
          Increase Count
        </button>
        <button className="btn btn-dark" onClick={decreaseCounter}>
          Decrease Count
        </button>
        <button className="btn btn-dark" onClick={resetCounter}>
          Reset Count
        </button>
      </div>
    </>
  );
}
