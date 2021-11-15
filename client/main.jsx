import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";

import App from "./components/App";
import BinsList from "./components/bins/BinsList";
import BinsMain from "./components/bins/BinsMain";

// we should import on both sides this for availiable calls of collection methods
import { Bins } from "../imports/api/bins";
import {
  Router,
  Route,
  IndexRoute,
  Switch,
  useRouterHistory,
} from "react-router";
import { createHistory } from "history";

const history = useRouterHistory(createHistory)({
  basename: "/",
});

const routes = (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={BinsList} />
      <Route path="bins" component={BinsMain} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  render(routes, document.getElementById("app"));
});

/*  { <App /> <Route path="/bins" component={BinsMain} /> }*/
