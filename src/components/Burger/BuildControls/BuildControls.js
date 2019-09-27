import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => (
  <div className="BuildControls">
    <p>
      Current Price: <strong>$ {props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        lessDisabled={props.ingredients[ctrl.type] <= 0}
        addHandler={() => props.addHandler(ctrl.type)}
        removeHandler={() => props.removeHandler(ctrl.type)}
      />
    ))}
    <button
      className="OrderButton"
      disabled={!props.purchasable}
      onClick={props.orderNow}
    >
      Order Now
    </button>
  </div>
);

export default buildControls;
