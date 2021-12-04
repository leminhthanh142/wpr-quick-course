import React from "react";
// eslint-disable-next-line object-curly-newline
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { HomePage } from "./components/pages/HomePage";
import { SignInPage } from "./components/pages/SignIn";
import { SignUpPage } from "./components/pages/SignUp";
import { SupportPage } from "./components/pages/Support";
import { GlobalStyle } from "./GlobalStyle";
import { ProductDetails } from "./components/pages/ProductDetails";
import { CartView } from "./components/pages/Cart";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signup" component={SignUpPage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/support" component={SupportPage} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route exact path="/cart" component={CartView} />
      <Redirect from="*" to="/" />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);
