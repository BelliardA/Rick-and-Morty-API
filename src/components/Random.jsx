import { useEffect, useState } from "react";
import Profile from "./Profile";

function Random() {
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
    <>
      {characterRefresh && <Profile {...characterRefresh} dark={true} />}
      <button className="btn-change" onClick={handleClick}>
        change Character
      </button>
    </>
  );
}

export default Random;
