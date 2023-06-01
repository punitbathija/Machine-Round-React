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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <h1>Om Namo Shivay</h1>
      <br />
      {isRunning && (
        <div
          style={{
            textAlign: "center",
            height: "20px",
            width: `${progress}%`,
            background: "linear-gradient(to right, #1c92d2, #f2fcfe)",
            transition: "ease",
            border: "4px dashed black",
          }}
        >
          Loading... {progress}%
        </div>
      )}
      <br />
      <button onClick={() => setIsRunning(true)}>Start</button>
    </div>
  );
};

export default ProgressBar;
