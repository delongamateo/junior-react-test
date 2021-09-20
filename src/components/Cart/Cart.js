import React, { Component } from "react";
import CartItem from "../CartItem/CartItem";
import StoreContext from "../Context/StoreContext";
import "./Cart.scss";

class Cart extends Component {
  render() {
    const { items } = this.context;

    return (
      <div className="cartContainer">
        <h2 className="cart">CART</h2>
        <div className="cartItemContainer">
          {items.map((item, i) => (
            <CartItem item={item} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

Cart.contextType = StoreContext;

export default Cart;
