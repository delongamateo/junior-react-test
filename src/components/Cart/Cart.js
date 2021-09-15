import React, { Component } from "react";
import CartItem from "../CartItem/CartItem"
import CartItemsContext from "../Context/CartItemsContext";
import "./Cart.scss"

class Cart extends Component {
    render() {
      const { items, addItem } = this.context;
        return (
          <div className="cartContainer">
            <h2 className="cart">CART</h2>
            <div className="cartItemContainer">
              {items.map((item, i) => (
                <CartItem item={item} key={i}/>
              ))}
            </div>
          </div>
        );
    }
}

Cart.contextType = CartItemsContext;

export default Cart;