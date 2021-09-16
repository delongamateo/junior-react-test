import React, { Component } from "react";
import CartItem from "../CartItem/CartItem"
import CartItemsContext from "../Context/CartItemsContext";
import "./Cart.scss"

class Cart extends Component {
    render() {
      const { items, addItem } = this.context;
      const list = [
        ...items
          .reduce((mp, o) => {
            if (!mp.has(o.id)) mp.set(o.id, { ...o, count: 0 });
            mp.get(o.id).count++;
            return mp;
          }, new Map())
          .values(),
      ];

        return (
          <div className="cartContainer">
            <h2 className="cart">CART</h2>
            <div className="cartItemContainer">
              {list.map((item, i) => (
                <CartItem item={item} addItem={addItem} key={i}/>
              ))}
            </div>
          </div>
        );
    }
}

Cart.contextType = CartItemsContext;

export default Cart;