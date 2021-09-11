import React, { Component } from "react";
import MiniCart from "../MiniCart/MiniCart"
import "./Layout.scss"

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      category: "women"
    }
  }

  updateCategory(props) {
    this.setState({category: props})
  }

  render() {
      return (
        <div className="container">
          <nav>
            <div className="categories">
              <button
                className={
                  this.state.category === "women"
                    ? "selectedCategory"
                    : "category"
                }
                onClick={() => this.updateCategory("women")}
              >
                WOMEN
              </button>
              <button
                className={
                  this.state.category === "men"
                    ? "selectedCategory"
                    : "category"
                }
                onClick={() => this.updateCategory("men")}
              >
                MEN
              </button>
              <button
                className={
                  this.state.category === "kids"
                    ? "selectedCategory"
                    : "category"
                }
                onClick={() => this.updateCategory("kids")}
              >
                KIDS
              </button>
            </div>
            <div className="logoContainer">
              <img src="./images/a-logo.png" alt="logo" />
            </div>
            <div className="currencyAndCart">
              <select className="currencies">
                <option value="volvo">$ USD</option>
                <option value="saab">€ EUR</option>
                <option value="mercedes">¥ JPY</option>
              </select>
              <img src="./images/Empty Cart.png" alt="cart" className="cart" />
            </div>
          </nav>
          <MiniCart />
        </div>
      );
  }
}

export default Layout;