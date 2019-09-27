import React, { Component } from "react";
import Aux from "../../hoc/Hoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 0.7,
  bacon: 0.3
};

class BurgerBiulder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  purchasehandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelhandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinuehandler = () => {
    alert("Continue Clicked");
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelhandler}
        >
          <OrderSummary
            purchaseCanceled={this.purchaseCancelhandler}
            purchaseContinue={this.purchaseContinuehandler}
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          addHandler={this.addIngredientHandler}
          removeHandler={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderNow={this.purchasehandler}
        />
      </Aux>
    );
  }
}

export default BurgerBiulder;
