import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./container/login/Login";
import Register from "./container/register/Register";

function App() {
  return (
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
