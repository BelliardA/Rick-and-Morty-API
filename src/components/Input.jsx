import { useState } from "react";
import Profile from "./Profile";
import "./Input.css";

const Input = () => {
  const [characterInput, setCharacterInput] = useState(null);
  const [inputValue, setInputValue] = useState("");

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
    <div>
      <h2>Search a character</h2>
      <form className="fom-input" onSubmit={handleSubmit}>
        <input
          className="input-search"
          type="number"
          value={inputValue}
          onChange={handleChange}
          placeholder="Entrez quelque chose..."
        />
        <button className="btn-change" type="submit">
          Send
        </button>
      </form>
      <div className="profiles">
        {characterInput && <Profile {...characterInput} />}
      </div>
    </div>
  );
};

export default Input;
