import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./authPages/LoginPage/LoginPage";
import RegisterPage from "./authPages/RegisterPage/RegisterPage";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginPage  />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route path="/">
            <Redirect to="/register" />
          </Route>
        </Switch>
      </Router>
      
    </>
  );
}

export default App;

