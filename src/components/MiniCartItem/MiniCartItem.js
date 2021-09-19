import React, { Component } from "react";
import StoreContext from "../Context/StoreContext";
import "./MiniCartItem.scss"

class MiniCartItem extends Component {

  render() {
    const { addItem, removeItem, storeCurrency } = this.context;
    return (
      <div className="miniCartItem">
        <div className="miniCartItemInfo">
          <div className="miniNameAndPrice">
            <p className="miniCartItemName">{this.props.item.name}</p>
            <p className="miniCartItemPrice">
              {
                this.props.item.prices.find((price) => {
                  return price.currency === storeCurrency;
                }).amount
              }{" "}
              {storeCurrency}
            </p>
          </div>
          <div className="miniSizeButtons">
            <button className="miniSmallButton size">S</button>
            <button className="miniSmallButton">M</button>
          </div>
        </div>
        <div className="miniQuantityAndImage">
          <div className="miniQuantity">
            <button
              className="miniSmallButton"
              onClick={() => addItem(this.props.item)}
            >
              +
            </button>
            <p>{this.props.item.count}</p>
            <button className="miniSmallButton" onClick={() => removeItem(this.props.item)}>
              -
            </button>
          </div>
          <img
            src={this.props.item.gallery[0]}
            className="cartItemImage"
            alt="cartitemimage"
          />
        </div>
      </div>
    );
  }
}

MiniCartItem.contextType = StoreContext;

export default MiniCartItem