import React, { useState } from "react";

const stopwatch = () => {
  const [time, setTime] = useState(null);

  const handleStart = () => {
    //
  };

  const handleStop = () => {
    //
  };

  return (
    <div>
      <h1>Om Namo Shivay</h1>
      <h2>0:00</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Start</button>
    </div>
  );
};

export default stopwatch;
