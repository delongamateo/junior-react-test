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
              this.props.category === "Clothes"
                ? "selectedCategory"
                : "category"
            }
            onClick={() => this.props.updateCategory("Clothes")}
          >
            CLOTHES
          </Link>
          <Link
            to="/tech"
            className={
              this.props.category === "Tech" ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory("Tech")}
          >
            TECH
          </Link>
        </div>
        <div className="logoContainer">
          <img src="./images/a-logo.png" alt="logo" />
        </div>
        <div className="currencyAndCart">
          <p
            className="currency"
            onClick={() => this.props.showCurrenciesPicker()}
          >
            {this.props.storeCurrency}
          </p>
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