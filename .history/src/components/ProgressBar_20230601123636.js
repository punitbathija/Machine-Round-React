import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (progress < 100 && isRunning) {
      setTimeout(() => {
        setProgress((prev) => prev + 2);
      }, 100);
    }
  }, [isRunning, progress]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <h1>Om Namo Shivay</h1>
      <div
        style={{
          textAlign: "center",
          height: "20px",
          width: `${progress}px`,
          backgroundColor: "blue",
          color: "white",
          transition: "ease",
          border: "1px solid black",
        }}
      >
        {progress} %
      </div>
      <button onClick={() => setIsRunning(true)}>Start</button>
    </div>
  );
};

export default ProgressBar;
