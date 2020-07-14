import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingPage";
import AboutMe from "./aboutMe";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
  </Switch>
);

export default Main;
