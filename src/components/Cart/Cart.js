import React, { Component } from "react";
import CartItem from "../CartItem/CartItem"
import StoreContext from "../Context/StoreContext";
import "./Cart.scss"

class Cart extends Component {
    render() {
      const { items } = this.context;
      const list = [
        ...items
          .reduce((mp, o) => {
            if (!mp.has(o.id)) mp.set(o.id, { ...o, count: 0 });
            mp.get(o.id).count++;
            return mp;
          }, new Map())
          .values()
      ];

        return (
          <div className="cartContainer">
            <h2 className="cart">CART</h2>
            <div className="cartItemContainer">
              {list.map((item, i) => (
                <CartItem item={item} key={i}/>
              ))}
            </div>
          </div>
        );
    }
}

Cart.contextType = StoreContext;

export default Cart;