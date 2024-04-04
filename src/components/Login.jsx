import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Profile from "./Profile";

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
    <div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="username"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="outlined" onClick={onLogin}>
        Login
      </Button>
      {logged && (
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {character.map((character, index) => (
            <Profile key={index} {...character} dark={false} />
          ))}
        </div>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Login;
