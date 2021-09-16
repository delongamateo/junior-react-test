import React, { Component } from "react";
import MiniCartItem from "../MiniCartItem/MiniCartItem"
import { Link } from "react-router-dom"
import CartItemsContext from "../Context/CartItemsContext";
import "./MiniCart.scss";

class MiniCart extends Component {

    render() {
      const { items, addItem, storeCurrency } = this.context;
      const list = [...items.reduce((mp, o) => {if(!mp.has(o.id)) mp.set(o.id, {...o, count: 0}); mp.get(o.id).count++; return mp;}, new Map).values()]
        return (
          <div className="miniCart">
            <div className="miniCartTitle">
              <p>
                My Bag, <span>{items.length} items</span>
              </p>
            </div>
            {list.map((item, i) => (
              <MiniCartItem item={item} key={i} addItem={addItem}/>
            ))}
            <div className="miniCartTotal">
              <p className="total">Total</p>
              <p className="price">{Math.round((items.reduce((acc, item) => {acc =
                acc +
                item.prices.find((price) => {
                  return price.currency === storeCurrency;
                }).amount; return (acc);}, 0) + Number.EPSILON) * 100) / 100} {storeCurrency}</p>
            </div>
            <div className="miniCartButtons">
              <Link to="/cart" className="viewBag" onClick={() => {this.props.showMiniCart()}}>VIEW BAG</Link>
              <button className="checkout">CHECK OUT</button>
            </div>
          </div>
        );
    }
}

MiniCart.contextType = CartItemsContext;

export default MiniCart;