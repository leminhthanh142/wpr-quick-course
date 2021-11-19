import React from "react";
import "./App.css";
import {
  Switch, Route, BrowserRouter, Redirect,
} from "react-router-dom";

import { HomePage } from "./components/pages/HomePage";

export const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </div>
);
