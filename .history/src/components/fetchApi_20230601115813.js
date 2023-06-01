import React, { useState } from "react";

const fetchApi = () => {
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const apiCall = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((d) => console.log(d.results));
  };

  return (
    <div>
      <h1>Om Namo Shivay</h1>
    </div>
  );
};

export default fetchApi;
