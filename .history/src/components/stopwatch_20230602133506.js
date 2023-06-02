import React, { useState } from "react";

const stopwatch = () => {
  const [time, setTime] = useState(null);

  return (
    <div>
      <h1>Om Namo Shivay</h1>
      <h2>0:00</h2>
    </div>
  );
};

export default stopwatch;
