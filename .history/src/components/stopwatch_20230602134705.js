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

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Om Namo Shivay</h1>
      <h2>{time}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};

export default Stopwatch;
