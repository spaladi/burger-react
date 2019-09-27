import React from "react";
import Aux from "../../hoc/Hoc";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
