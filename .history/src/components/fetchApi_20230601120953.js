import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const apiCall = () => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((d) => setData(d.results));
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <h1>Om Namo Shivay</h1>
      <select></select>
    </div>
  );
};

export default FetchApi;
