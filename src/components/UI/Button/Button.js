import React from "react";
import "./Button.css";

const button = props => {
  const classes = "Button " + props.btnType;
  return (
    <button className={classes} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
