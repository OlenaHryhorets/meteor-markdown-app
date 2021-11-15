import React from "react";
import BinsList from './bins/BinsList';
import BinsMain from './bins/BinsMain';
import Header from "./Header";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={BinsList} />
        <Route path="bins/:binId" component={BinsMain} />
        <Redirect to={"/"} />
      </Switch>
    </BrowserRouter>
  );
};
