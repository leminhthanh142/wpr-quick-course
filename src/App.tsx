import React from "react";
import {
  Switch, Route, BrowserRouter, Redirect,
} from "react-router-dom";

import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { ShopeeMall } from "./components/pages/ShopeeMall";
import { SignInPage } from "./components/pages/SignIn";
import { SignUpPage } from "./components/pages/SignUp";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/mall" component={ShopeeMall} />
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
);
