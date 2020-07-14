import React from "react";
import "./App.css";
import LandingPage from "./components/landingPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" render={LandingPage} />
      {/* <Route path="/aboutme" render={AboutMe} /> */}
      {/* <Route path="/projects" render={Projects} /> */}
    </div>
  );
}

export default App;
