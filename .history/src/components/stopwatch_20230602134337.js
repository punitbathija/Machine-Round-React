import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(null);

  const timeRef = useRef(null);

  const handleStart = () => {
    setInterval(() => {
      setTime(Date.now());
    }, 10);
  };

  const handleStop = () => {};

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <h2>{time}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Start</button>
    </div>
  );
};

export default Stopwatch;
