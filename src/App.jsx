import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <>{character && <h1>{character.name}</h1>}</>;
}

export default App;
