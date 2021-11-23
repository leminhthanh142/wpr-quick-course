import React from "react";
// eslint-disable-next-line object-curly-newline
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { SignInPage } from "./components/pages/SignIn";
import { SignUpPage } from "./components/pages/SignUp";
import { GlobalStyle } from "./GlobalStyle";
import { ShopeeMall } from "./components/pages/ShopeeMall";
import { ProductDetails } from "./components/pages/ProductDetails";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/mall" component={ShopeeMall} />
      <Route path="/product/:id" component={ProductDetails} />
      <Redirect from="*" to="/" />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);
