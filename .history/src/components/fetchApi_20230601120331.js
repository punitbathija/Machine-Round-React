import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const apiCall = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((d) => setData(d.results));
    console.log(data);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <h1>Om Namo Shivay</h1>
    </div>
  );
};

export default FetchApi;
