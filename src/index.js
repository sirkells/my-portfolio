import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";
import Jokes from "./components/Jokes";
// import Header from "./Header";
// import Musicaly from "./projects/musicaly";
import "./index.css";
import App from "./components/App";
import Musicaly from "./projects/musicaly";
import Robots from "./projects/robot-pals";
import * as serviceWorker from "./components/serviceWorker";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/jokes" component={Jokes} />
      <Route path="/musicaly" component={Musicaly} />
      <Route path="/robots" component={Robots} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
