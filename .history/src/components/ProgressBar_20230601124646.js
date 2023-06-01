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
            margin: "auto",
            textAlign: "center",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: `${progress}%`,
            background: "linear-gradient(to right, #1c92d2, #f2fcfe)",
            transition: "ease",
            border: "4px dashed black",
            padding: "10px",
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
