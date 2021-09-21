import React, { Component } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../Context/StoreContext";
import "./ProductCard.scss";
import circleIcon from "../../images/circleIcon.png"

class ProductCard extends Component {
  render() {
    const { storeCurrency } = this.context;
    return (
      <>
        {this.props.product.inStock ? (
          <Link
            to={`/productpage/${this.props.product.id}`}
            className="cardContainer"
          >
            <img
              src={this.props.product.gallery[0]}
              className="productImage"
              alt=""
            />
            <img src={circleIcon} className="circleIcon" alt="" />
            <p className="productTitle">{this.props.product.name}</p>
            <p className="productPrice">
              {
                this.props.product.prices.find((price) => {
                  return price.currency === storeCurrency;
                }).amount
              }{" "}
              {storeCurrency}
            </p>
          </Link>
        ) : (
          <div className="outOfStock">
            <div className="imageOutOfStock">
              <div className="outOfStockText"><p>OUT OF STOCK</p></div>
              <img
                src={this.props.product.gallery[0]}
                className="productImage"
                alt=""
              />
            </div>
            <p className="productTitle">{this.props.product.name}</p>
            <p className="productPrice">
              {
                this.props.product.prices.find((price) => {
                  return price.currency === storeCurrency;
                }).amount
              }{" "}
              {storeCurrency}
            </p>
          </div>
        )}
      </>
    );
  }
}

ProductCard.contextType = StoreContext;

export default ProductCard;
