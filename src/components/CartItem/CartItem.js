import React, { Component } from "react";
import StoreContext from "../Context/StoreContext";
import "./CartItem.scss";

class CartItem extends Component {
  render() {
    const { addItem, removeItem, storeCurrency } = this.context;
    return (
      <div className="cartItem">
        <div className="cartItemInfo">
          <p className="cartItemName">{this.props.item.name}</p>
          <p className="cartItemName2">{this.props.item.brand}</p>
          <p className="cartItemPrice">
            {
              this.props.item.prices.find((price) => {
                return price.currency === storeCurrency;
              }).amount
            }{" "}
            {storeCurrency}
          </p>
          <div className="sizeButtons">
            <div className="smallButtonSize">S</div>
            <div className="smallButtonSize">M</div>
          </div>
        </div>
        <div className="quantityAndImage">
          <div className="quantity">
            <button
              className="smallButton"
              onClick={() => addItem(this.props.item)}
            >
              +
            </button>
            <p>{this.props.item.count}</p>
            <button
              className="smallButton"
              onClick={() => removeItem(this.props.item)}
            >
              -
            </button>
          </div>
          <img src={this.props.item.gallery[0]} alt="cartitemimg" />
        </div>
      </div>
    );
  }
}

CartItem.contextType = StoreContext;

export default CartItem;
