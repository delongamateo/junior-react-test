import React, { Component } from "react";
import "./CartItem.scss";

class CartItem extends Component {
 
  render() {
    return (
      <div className="cartItem">
        <div className="cartItemInfo">
          <p className="cartItemName">{this.props.item.name}</p>
          <p className="cartItemName2">{this.props.item.brand}</p>
          <p className="cartItemPrice">$50.00</p>
          <div className="sizeButtons">
            <button className="smallButtonSize">S</button>
            <button className="smallButtonSize">M</button>
          </div>
        </div>
        <div className="quantityAndImage">
          <div className="quantity">
            <button
              className="smallButton"
              onClick={() => this.props.addItem(this.props.item)}
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

export default CartItem;
