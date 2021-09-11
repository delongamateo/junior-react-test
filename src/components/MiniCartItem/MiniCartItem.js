import React, { Component } from "react";

class MiniCartItem extends Component {
    render() {
        return (
          <div className="cartItem">
            <div className="name">
              <p>Apollo Running Short</p>
              <p>$50.00</p>
            </div>
            <div className="quantity">
              <button className="smallButton">+</button>
              <p>1</p>
              <button className="smallButton">-</button>
            </div>
            <div className="image"></div>
          </div>
        );
    }
}

export default MiniCartItem