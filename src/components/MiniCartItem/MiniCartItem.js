import React, { Component } from "react";
import "./MiniCartItem.scss"

class MiniCartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  increment() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  decrement() {
    if(this.state.quantity > 0) {
        this.setState({
                quantity: this.state.quantity - 1
        });
    }
    else return
  }

  render() {
    return (
      <div className="cartItem">
        <div className="cartItemInfo">
          <div className="nameAndPrice">
            <p className="cartItemName">Apollo Running Short</p>
            <p className="cartItemPrice">$50.00</p>
          </div>
          <div className="sizeButtons">
            <button className="smallButton size">S</button>
            <button className="smallButton">M</button>
          </div>
        </div>
        <div className="quantityAndImage">
          <div className="quantity">
            <button className="smallButton" onClick={() => this.increment()}>
              +
            </button>
            <p>{this.state.quantity}</p>
            <button className="smallButton" onClick={() => this.decrement()}>
              -
            </button>
          </div>
          <img src="./images/Product D.png" />
        </div>
      </div>
    );
  }
}

export default MiniCartItem