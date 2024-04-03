import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  const [characterRefresh, setCharacterRefresh] = useState(null);
  const [characterInput, setCharacterInput] = useState(null);
  const [inputValue, setInputValue] = useState("");
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

  //---------------------------Search----------------------------

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${inputValue}`
      );
      if (!response.ok) {
        throw new Error("Erreur lors de la requête");
      }

      const data = await response.json();
      setCharacterInput(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
      <div className="searchPart">
        <h2>Search a character</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input-search"
            type="number"
            value={inputValue}
            onChange={handleChange}
            placeholder="Entrez quelque chose..."
          />
          <button type="submit">Send</button>
        </form>
        <div className="profiles">
          {characterInput && <Profile {...characterInput} dark={dark} />}
        </div>
      </div>
    </div>
  );
}

export default App;
