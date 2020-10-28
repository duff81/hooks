import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import UserInfo from "./UserInfo";

export default function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Users/:id" component={UserInfo} />
        <Route exact path="/Users" component={Users} />
      </Switch>
    </Router>
  );
}
