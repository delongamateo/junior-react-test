import React, { Component } from "react";
import CartItemsContext from "../Context/CartItemsContext";
import "./CartItem.scss";

class CartItem extends Component {
 
  render() {
    const { storeCurrency, addItem } = this.context;
    return (
      <div className="cartItem">
        <div className="cartItemInfo">
          <p className="cartItemName">{this.props.item.name}</p>
          <p className="cartItemName2">{this.props.item.brand}</p>
          <p className="cartItemPrice">{this.props.item.prices.find((price) => {
                return price.currency === storeCurrency;
              }).amount} {storeCurrency}</p>
          <div className="sizeButtons">
            <button className="smallButtonSize">S</button>
            <button className="smallButtonSize">M</button>
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
            <button className="smallButton" onClick={() => this.decrement()}>
              -
            </button>
          </div>
          <img src={this.props.item.gallery[0]} alt="cartitemimg" />
        </div>
      </div>
    );
  }
}

CartItem.contextType = CartItemsContext;

export default CartItem;
