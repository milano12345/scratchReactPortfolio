import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutme">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
