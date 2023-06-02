import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);
  const timeRef = useRef(null);

  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    timeRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timeRef.current);
  };

  const actualTime = (time - now).toFixed(3) / 1000;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <h2>{actualTime}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

export default Stopwatch;
