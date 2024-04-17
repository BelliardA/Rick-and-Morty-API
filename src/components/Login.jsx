import { useState, useEffect } from "react";
import Profile from "./Profile";
import "./Login.css";

const USERNAME = "tim";
const PASSWORD = "lapin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState();
  const [character, setCharacter] = useState([]);

  const onLogin = () => {
    if (username === USERNAME && password === PASSWORD) setLogged(true);
    else setError("Les identifiants sont faux");
  };

  const fetchRandomCharacter = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) =>
        setCharacter((prevCharacters) => [...prevCharacters, data])
      )
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    if (logged) {
      fetchRandomCharacter(1);
      fetchRandomCharacter(2);
    }
  }, [logged]);

  return (
    <div className="login-component">
      <input
        className="input-search"
        placeholder="tim"
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="input-search"
        placeholder="lapin"
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button className="btn-change" onClick={onLogin}>
        Login
      </button>
      {logged && (
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {character.map((character, index) => (
            <Profile key={index} {...character} dark={true} />
          ))}
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
