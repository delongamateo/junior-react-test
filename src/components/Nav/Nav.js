import React, { Component } from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import "./Nav.scss";
import CartItemsContext from "../Context/CartItemsContext";

const getCategoriesQuery = gql`
  {
    categories {
      name
    }
  }
`;

class Nav extends Component {
  render() {
    const {items, storeCurrency} = this.context
    return (
      <nav>
        <div className="categories">
          <Link
            to="/"
            className={
              this.props.category === ""
                ? "selectedCategory"
                : "category"
            }
            onClick={() => this.props.updateCategory("")}
          >
            ALL
          </Link>
          {this.props.data.categories?.map((category, i) => (
            <Link
            to={`/${category.name}`}
            className={
              this.props.category === category.name ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory(category.name)}
            key={i}
          >
            {category.name.toUpperCase()}
          </Link>
            ))
          }
        </div>
        <div className="logoContainer">
          <img src="./images/a-logo.png" alt="logo" />
        </div>
        <div className="currencyAndCart">
          <div
            className="navCurrencyContainer"
            onClick={() => this.props.showCurrenciesPicker()}
          >
            <p className="storeCurrency">{storeCurrency}</p>
            <img
              src={
                this.props.currenciesPicker
                  ? "./images/up.png"
                  : "./images/down.png"
              }
              alt="arrow"
              className="arrow"
            />
          </div>
          <div
            className="navCartContainer"
            onClick={() => this.props.showMiniCart()}
          >
            <img src="./images/Empty Cart.png" alt="cart" className="cart" />
            <div className="cartNumber">{items?.length}</div>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.contextType = CartItemsContext;

export default graphql (getCategoriesQuery)(Nav);
