import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const apiCall = () => {
    fetch("https://pokeapi.co/api/v/pokemon?limit=20")
      .then((res) => res.json())
      .then((d) => setData(d.results))
      .catch((err) =>
        setError(`Error occured while fetching data ${err.message}`)
      );
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div>
      <h1>Om Namo Shivay</h1>
      {data && (
        <select>
          {data.map((pokemon) => {
            return <option key={pokemon.name}>{pokemon.name}</option>;
          })}
        </select>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default FetchApi;
