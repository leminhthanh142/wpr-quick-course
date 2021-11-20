import React from "react";
import "./App.css";
import {
  Switch, Route, BrowserRouter, Redirect,
} from "react-router-dom";

import { HomePage } from "./components/pages/HomePage";
import { LoginPage } from "./components/pages/Login";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
