import React, { PureComponent } from "react";
import MiniCartItem from "../MiniCartItem/MiniCartItem";
import { Link } from "react-router-dom";
import StoreContext from "../Context/StoreContext";
import { sumBy } from "lodash";
import "./MiniCart.scss";

class MiniCart extends PureComponent {
  render() {
    const { items, storeCurrency } = this.context;

    const totalCartAmount =
      Math.round(
        (items.reduce((acc, item) => {
          acc =
            acc +
            item.prices.find((price) => {
              return price.currency === storeCurrency;
            }).amount *
              item.quantity;
          return acc;
        }, 0) +
          Number.EPSILON) *
          100
      ) / 100;

    return (
      <div className="miniCart">
        <div className="miniCartTitle">
          <p>
            My Bag, <span>{sumBy(items, "quantity")} items</span>
          </p>
        </div>
        {items.map((item, i) => (
          <MiniCartItem item={item} key={i} />
        ))}
        <div className="miniCartTotal">
          <p className="total">Total</p>
          <p className="price">
            {totalCartAmount}
            {storeCurrency}
          </p>
        </div>
        <div className="miniCartButtons">
          <Link
            to="/cart"
            className="viewBag"
            onClick={() => {
              this.props.toggleMiniCart();
            }}
          >
            VIEW BAG
          </Link>
          <button className="checkout">CHECK OUT</button>
        </div>
      </div>
    );
  }
}

MiniCart.contextType = StoreContext;

export default MiniCart;
