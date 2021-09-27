import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { getCategoriesQuery } from "../../GraphQL/Queries";
import { graphql } from "react-apollo";
import { sumBy } from "lodash";
import "./Nav.scss";
import StoreContext from "../Context/StoreContext";
import logo from "../../images/logo.png";
import emptyCart from "../../images/emptyCart.png";
import down from "../../images/down.png";
import up from "../../images/up.png";

class Nav extends PureComponent {
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
          <img src={logo} alt="logo" />
        </div>
        <div className="currencyAndCart">
          <div
            className="navCurrencyContainer"
            onClick={() => this.props.toggleCurrenciesPicker()}
          >
            <p className="storeCurrency">{storeCurrency}</p>
            <img
              src={this.props.currenciesPicker ? up : down}
              alt="arrow"
              className="arrow"
            />
          </div>
          <div
            className="navCartContainer"
            onClick={() => this.props.toggleMiniCart()}
          >
            <img src={emptyCart} alt="cart" className="cart" />
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
