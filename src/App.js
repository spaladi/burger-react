import React, { Component } from "react";
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuiilder/BugerBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
