import React, { Component } from "react";
import CartItem from "../CartItem/CartItem"
import "./Cart.scss"

class Cart extends Component {
    render() {
        return (
          <div className="cartContainer">
            <h2 className="cart">CART</h2>
            <div className="cartItemContainer">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              
            </div>
          </div>
        );
    }
}

export default Cart;