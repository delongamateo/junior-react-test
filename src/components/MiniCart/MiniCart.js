import React, { Component } from "react";
import MiniCartItem from "../MiniCartItem/MiniCartItem"
import { Link } from "react-router-dom"
import CartItemsContext from "../Context/CartItemsContext";
import "./MiniCart.scss";

class MiniCart extends Component {

    render() {
      const {items, addItem} = this.context
        return (
          <div className="miniCart">
            <div className="miniCartTitle">
              <p>
                My Bag, <span>{items.length} items</span>
              </p>
            </div>
            {items.map((item, i) => (
              <MiniCartItem item={item} key={i}/>
            ))}
            <div className="miniCartTotal">
              <p className="total">Total</p>
              <p className="price">$100.00</p>
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