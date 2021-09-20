import React, { Component } from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import { sumBy } from "lodash";
import "./Nav.scss";
import StoreContext from "../Context/StoreContext";

const getCategoriesQuery = gql`
  {
    categories {
      name
    }
  }
`;

class Nav extends Component {
  render() {
    const { items, storeCurrency, selectedCategory, updateCategory } =
      this.context;
    return (
      <nav>
        <div className="categories">
          <Link
            to="/"
            className={
              selectedCategory === "" ? "selectedCategory" : "category"
            }
            onClick={() => updateCategory("")}
          >
            ALL
          </Link>
          {this.props.data.categories?.map((category, i) => (
            <Link
              to={`/${category.name}`}
              className={
                selectedCategory === category.name
                  ? "selectedCategory"
                  : "category"
              }
              onClick={() => updateCategory(category.name)}
              key={i}
            >
              {category.name.toUpperCase()}
            </Link>
          ))}
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
            <div
              className="cartNumber"
              style={{ display: items.length > 0 ? "flex" : "none" }}
            >
              {sumBy(items, function (o) {
                return o.quantity;
              })}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.contextType = StoreContext;

export default graphql(getCategoriesQuery)(Nav);
