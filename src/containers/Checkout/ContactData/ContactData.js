import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        eleType: "input",
        eleConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        eleType: "input",
        eleConfig: {
          type: "email",
          placeholder: "Your Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      address: {
        eleType: "input",
        eleConfig: {
          type: "text",
          placeholder: "Your Address"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        eleType: "select",
        eleConfig: {
          options: [
            { value: "fastest", displayValue: "fastest" },
            { value: "chepest", displayValue: "chepest" }
          ]
        },
        value: "fastest",
        validation: {},
        valid: true
      }
    },
    formValid: false,
    loading: false
  };

  orderhandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let formEle in this.state.orderForm) {
      formData[formEle] = this.state.orderForm[formEle].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      orderData: formData
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  checkValidity(value, rules) {
    let isValid = false;
    if (!rules || !rules.required) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "";
    }
    return isValid;
  }

  inputChangeHandler = (event, inputIdentifier) => {
    const formData = { ...this.state.orderForm };
    const updatedFormEle = { ...formData[inputIdentifier] };
    updatedFormEle.value = event.target.value;
    updatedFormEle.touched = true;
    updatedFormEle.valid = this.checkValidity(
      updatedFormEle.value,
      updatedFormEle.validation
    );
    formData[inputIdentifier] = updatedFormEle;
    let formValid = true;
    for (let key in formData) {
      formValid = formData[key].valid && formValid;
    }
    this.setState({ orderForm: formData, formValid: formValid });
    console.log(this.state.formValid);
  };

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({ id: key, config: this.state.orderForm[key] });
    }

    let form = (
      <form onSubmit={this.orderhandler}>
        {formElements.map(formEle => (
          <Input
            key={formEle.id}
            name={formEle.id}
            eleType={formEle.config.eleType}
            eleConfig={formEle.config.eleConfig}
            value={formEle.config.value}
            invalid={!formEle.config.valid}
            touched={formEle.config.touched}
            onChangeHandler={event =>
              this.inputChangeHandler(event, formEle.id)
            }
          />
        ))}
        <Button
          btnType="Success"
          clicked={this.orderhandler}
          disabled={!this.state.formValid}
        >
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className="ContactData">
        <h4>Enter Your Information</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
