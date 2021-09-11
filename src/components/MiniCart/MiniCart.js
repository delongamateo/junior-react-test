import React, { Component } from "react";
import MiniCartItem from "../MiniCartItem/MiniCartItem"
import "./MiniCart.scss";

class MiniCart extends Component {
    render() {
        return(
            <div className="miniCart">
                <div className="miniCartTitle">
                    <p>My Bag, <span>2 items</span></p>
                </div>
                <MiniCartItem />
            </div>
        )
    }
}

export default MiniCart;