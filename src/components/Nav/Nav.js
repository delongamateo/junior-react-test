import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss"

class Nav extends Component {

  render() {
    return (
      <nav>
        <div className="categories">
          <Link
            to="/"
            className={
              this.props.category === "Women" ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory("Women")}
          >
            WOMEN
          </Link>
          <Link
            to="/"
            className={
              this.props.category === "Men" ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory("Men")}
          >
            MEN
          </Link>
          <Link
            to="/"
            className={
              this.props.category === "Kids" ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory("Kids")}
          >
            KIDS
          </Link>
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