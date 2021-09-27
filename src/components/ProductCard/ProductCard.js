import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import StoreContext from "../Context/StoreContext";
import "./ProductCard.scss";
import circleIcon from "../../images/circleIcon.png";

class ProductCard extends PureComponent {
  render() {
    const { storeCurrency } = this.context;
    return (
      <>
        {this.props.product.inStock ? (
          <Link
            to={`/productpage/${this.props.product.id}`}
            className="cardContainer"
          >
            <div className="imgContainer">
              <img
                src={this.props.product.gallery[0]}
                className="productImage"
                alt=""
              />
            </div>
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
          <Link
            to={`/productpage/${this.props.product.id}`}
            className="outOfStock"
          >
            <div className="imageOutOfStock">
              <div className="outOfStockText">
                <p>OUT OF STOCK</p>
              </div>
              <div className="imgContainer">
                <img
                  src={this.props.product.gallery[0]}
                  className="productImage"
                  alt=""
                />
              </div>
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
          </Link>
        )}
      </>
    );
  }
}

ProductCard.contextType = StoreContext;

export default ProductCard;
