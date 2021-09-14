import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

class ProductCard extends Component {
  render() {
    return (
      <Link
        to={`/productpage/${this.props.product.id}`}
        className="cardContainer"
      >
        <img src={this.props.product.gallery[0]} className="productImage" />
        <img src="./images/Circle Icon.png" className="circleIcon" />
        <p className="productTitle">{this.props.product.name}</p>
        <p className="productPrice">{this.props.product.prices[0].amount}</p>
      </Link>
    );
  }
}

export default ProductCard;
