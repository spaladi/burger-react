import React from "react";
import Aux from "../../../hoc/Hoc";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span> :
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger with following ingredients:</p>
      <ul>{ingSummary}</ul>
      <p>
        <strong>Total Price: $ {props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        Continue
      </Button>
    </Aux>
  );
};

export default orderSummary;
