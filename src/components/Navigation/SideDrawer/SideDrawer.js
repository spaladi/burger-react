import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const sideDrawer = props => {
  return (
    <div className="SideDrawer">
      <Logo />
      <nav>
        <Navigationitems />
      </nav>
    </div>
  );
};

export default sideDrawer;
