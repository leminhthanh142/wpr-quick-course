import React from "react";
// eslint-disable-next-line object-curly-newline
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { LoginPage } from "./components/pages/Login";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/mall" component={ShopeeMall} />
      <Redirect from="*" to="/" />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);
