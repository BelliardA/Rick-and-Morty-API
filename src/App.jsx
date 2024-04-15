import "./App.css";
import Random from "./components/Random";
import Login from "./components/Login";
import Input from "./components/Input";

function App() {
  return (
    <div className="app">
      {/* Personnage random refresh ou bouton */}
      <div className="profiles">
        <Random />
      </div>
      {/* Rechcer grace a l'input */}
      <div className="searchPart">
        <Input />
      </div>
      {/* Rick et Morty au login : username -> tim / password -> lapin*/}
      <div className="login">
        <Login />
      </div>
    </div>
  );
}

export default App;
