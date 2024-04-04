import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Main.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    {/* <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router> */}
    <App />
  </React.StrictMode>
);
