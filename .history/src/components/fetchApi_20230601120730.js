import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const apiCall = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((d) => setData(d.results));
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <h1>Om Namo Shivay</h1>
      {data.map((pokemon) => {
        return <p key={pokemon.name}>{pokemon.name}</p>;
      })}
    </div>
  );
};

export default FetchApi;
