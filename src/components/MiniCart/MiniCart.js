import React, { Component } from "react";
import MiniCartItem from "../MiniCartItem/MiniCartItem"
import { Link } from "react-router-dom"
import "./MiniCart.scss";

class MiniCart extends Component {
    render() {
        return (
          <div className="miniCart">
            <div className="miniCartTitle">
              <p>
                My Bag, <span>2 items</span>
              </p>
            </div>
            <MiniCartItem />
            <MiniCartItem />
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

export default MiniCart;