import React from "react";
import { Route } from "react-router-dom";
import Login from "./container/login/Login";
import Register from "./container/register/Register";
import Employer from "./container/Employer/employer";

function App() {
  return (
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/employer">
        <Employer />
      </Route>
    </div>
  );
}

export default App;
