import React, { Component } from "react";
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import "./Nav.scss";

const getCategoriesQuery = gql`
  {
    categories {
      name
    }
  }
`;

class Nav extends Component {
  render() {
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
          {this.props.data.categories?.map((category) => (
            <Link
            to={`/${category.name}`}
            className={
              this.props.category === category.name ? "selectedCategory" : "category"
            }
            onClick={() => this.props.updateCategory(category.name)}
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
            class="navCurrencyContainer"
            onClick={() => this.props.showCurrenciesPicker()}
          >
            <p className="storeCurrency">{this.props.storeCurrency}</p>
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
            <div className="cartNumber">2</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default graphql (getCategoriesQuery)(Nav);
