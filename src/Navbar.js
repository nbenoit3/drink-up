import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./links/Home";
import Ingredients from "./links/Ingredients";
import About from "./links/About";
import FAQ from "./links/FAQ";
import Level from "./Levels/Level1";
import { initialState } from "./reducer";

let Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      <nav className="navbar navbar-expand-lg" id="nav-bar">
        <NavLink
          to="/Home"
          style={{ margin: "2em", textDecoration: "none", color: "#738290" }}
          activeStyle={{ fontWeight: "bold", color: "#FFFCF7" }}
        >
          Home
        </NavLink>
        <NavLink
          to="/Ingredients"
          style={{ margin: "2em", textDecoration: "none", color: "#738290" }}
          activeStyle={{ fontWeight: "bold", color: "#FFFCF7" }}
        >
          Ingredients
        </NavLink>
        <NavLink
          to="/About"
          style={{ margin: "2em", textDecoration: "none", color: "#738290" }}
          activeStyle={{ fontWeight: "bold", color: "#FFFCF7" }}
        >
          About
        </NavLink>
        <NavLink
          to="/FAQ"
          style={{ margin: "2em", textDecoration: "none", color: "#738290" }}
          activeStyle={{ fontWeight: "bold", color: "#FFFCF7" }}
        >
          FAQ
        </NavLink>
      </nav>
      <hr />
      <Switch>
        <Route path="/Home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/Ingredients" component={Ingredients} />
        <Route path="/About" component={About} />
        <Route path="/FAQ" component={FAQ} />
        {/* generate levels */}
        {Object.keys(initialState.levels).map((_, i) => {
          const ii = i + 1; // adjust for 0 start point
          return (
            <Route
              key={ii}
              path={"/Level" + ii}
              render={props => <Level {...props} level={ii} />}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Navbar;
