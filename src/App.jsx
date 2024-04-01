import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  const fetchRandomCharacter = () => {
    const randomCharacterId = Math.floor(Math.random() * 825) + 1; // Génère un ID de personnage aléatoire
    fetch(`https://rickandmortyapi.com/api/character/${randomCharacterId}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleClick = () => {
    fetchRandomCharacter();
  };

  return (
    <>
      <Navbar />
      <div className="profiles">
        {character && <Profile {...character} />}
        <button className="btn-change" onClick={handleClick}>
          change Character
        </button>
      </div>
    </>
  );
}

export default App;
