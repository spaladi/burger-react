import React from "react";
import "./BuildControl.css";

const buildControl = props => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button
      className="Less"
      disabled={props.lessDisabled}
      onClick={props.removeHandler}
    >
      Less
    </button>
    <button className="More" onClick={props.addHandler}>
      More
    </button>
  </div>
);

export default buildControl;
