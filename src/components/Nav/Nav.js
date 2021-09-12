import React, { Component } from "react";
import "./Nav.scss"

class Nav extends Component {

  render() {
    return (
      <nav>
        <div className="categories">
          <button
            className={
              this.props.category === "Women" ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory("Women")}
          >
            WOMEN
          </button>
          <button
            className={
              this.props.category === "Men" ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory("Men")}
          >
            MEN
          </button>
          <button
            className={
              this.props.category === "Kids" ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory("Kids")}
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
          <img
            src="./images/Empty Cart.png"
            alt="cart"
            className="cart"
            onClick={() => this.props.showMiniCart()}
          />
        </div>
      </nav>
    );
  }
}

export default Nav;