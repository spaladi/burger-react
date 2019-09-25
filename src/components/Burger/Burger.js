import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //console.log(Object.keys(props.ingredients));
  let slectedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      let count = props.ingredients[igKey];
      //console.log("key " + igKey);
      return [...Array(count)].map((_, i) => {
        //console.log("ing " + props.ingredients[igKey]);
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (slectedIngredients.length === 0) {
    slectedIngredients = <p>Please Start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {slectedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
