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
      <div className="miniCartItem">
        <div className="miniCartItemInfo">
          <div className="miniNameAndPrice">
            <p className="miniCartItemName">Apollo Running Short</p>
            <p className="miniCartItemPrice">$50.00</p>
          </div>
          <div className="miniSizeButtons">
            <button className="miniSmallButton size">S</button>
            <button className="miniSmallButton">M</button>
          </div>
        </div>
        <div className="miniQuantityAndImage">
          <div className="miniQuantity">
            <button className="miniSmallButton" onClick={() => this.increment()}>
              +
            </button>
            <p>{this.state.quantity}</p>
            <button className="miniSmallButton" onClick={() => this.decrement()}>
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