import React, { Component } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../Context/StoreContext";
import "./ProductCard.scss";

class ProductCard extends Component {
  render() {
    const {storeCurrency} = this.context;
    return (
      <Link
        to={`/productpage/${this.props.product.id}`}
        className="cardContainer"
      >
        <img src={this.props.product.gallery[0]} className="productImage" />
        <img src="./images/Circle Icon.png" className="circleIcon" />
        <p className="productTitle">{this.props.product.name}</p>
        <p className="productPrice">
          {this.props.product.prices.find((price) => {
            return price.currency === storeCurrency;
          }).amount} {storeCurrency}
        </p>
      </Link>
    );
  }
}

ProductCard.contextType = StoreContext;

export default ProductCard;
