import { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";

function App() {
  const [characterRefresh, setCharacterRefresh] = useState(null);
  const [characterInput, setCharacterInput] = useState(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  const fetchRandomCharacter = () => {
    const randomCharacterId = Math.floor(Math.random() * 825) + 1; // Génère un ID de personnage aléatoire
    fetch(`https://rickandmortyapi.com/api/character/${randomCharacterId}`)
      .then((response) => response.json())
      .then((data) => setCharacterRefresh(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleClick = () => {
    fetchRandomCharacter();
  };

  //---------------------------Search----------------------------

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dans handleSubmit" + inputValue);
    fetch(`https://rickandmortyapi.com/api/character/?id=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          setCharacterInput(data.results[0]);
        } else {
          alert("No character found");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    console.log("Dans handleChange" + inputValue);
  };

  return (
    <div>
      <Navbar />
      <div className="profiles">
        {characterRefresh && <Profile {...characterRefresh} />}
        <button className="btn-change" onClick={handleClick}>
          change Character
        </button>
      </div>
      {/* Rechcer grace a l'input */}
      <div>
        <h2>Search a character</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={inputValue}
            onChange={handleChange}
            placeholder="Entrez quelque chose..."
          />
          <button type="submit">Send</button>
        </form>
        <div className="profiles">
          {characterInput && <Profile {...characterInput} />}
        </div>
      </div>
    </div>
  );
}

export default App;
