import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(null);

  const randomCharacter = Math.floor(Math.random() * 825) + 1; // 826 characters in the API +1 car c'est entre 1 et 826

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${randomCharacter}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {character && (
        <>
          <h1>{character.name}</h1>
          <p>{character.status}</p>
          <p>{character.species}</p>
          <p>{character.gender}</p>
          <img src={character.image} alt="" />
        </>
      )}
    </>
  );
}

export default App;
