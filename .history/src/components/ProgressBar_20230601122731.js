import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (progress < 100 && isRunning) {
      setTimeout(
        setProgress((prev) => prev + 2),
        500
      );
    }
  }, [isRunning, progress]);

  return (
    <div>
      ProgressBar
      <h1>Om Namo Shivay</h1>
    </div>
  );
};

export default ProgressBar;
