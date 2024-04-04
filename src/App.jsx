import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Input from "./components/Input";

function App() {
  const [characterRefresh, setCharacterRefresh] = useState(null);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    fetchRandomCharacter();
    console.log(dark);
  }, []);

  const fetchRandomCharacter = () => {
    const randomCharacterId = Math.floor(Math.random() * 825) + 1; // Génère un ID de personnage aléatoire
    fetch(`https://rickandmortyapi.com/api/character/${randomCharacterId}`)
      .then((response) => response.json())
      .then((data) => setCharacterRefresh(data))
      .catch((error) => console.error("Error fetching data:", error));

    setDark(false);
  };

  const handleClick = () => {
    fetchRandomCharacter();
  };

  return (
    <div className="app">
      <div className="profiles">
        {characterRefresh && <Profile {...characterRefresh} dark={dark} />}
        <button className="btn-change" onClick={handleClick}>
          change Character
        </button>
      </div>
      {/* Rechcer grace a l'input */}
      <div className="input">
        <Input />
      </div>
      <div className="login">
        <Login />
      </div>
    </div>
  );
}

export default App;
