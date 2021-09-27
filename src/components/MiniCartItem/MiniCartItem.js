import React, { PureComponent } from "react";
import StoreContext from "../Context/StoreContext";
import { getProductQuery } from "../../GraphQL/Queries";
import { Query } from "react-apollo";
import "./MiniCartItem.scss";

class MiniCartItem extends PureComponent {
  render() {
    const { addItem, removeItem, storeCurrency } = this.context;
    return (
      <Query query={getProductQuery} variables={{ id: this.props.item.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          return (
            <div className="miniCartItem">
              <div className="miniCartItemInfo">
                <div className="miniNameAndPrice">
                  <p className="miniCartItemName">{data.product.name}</p>
                  <p className="miniCartItemBrand">{data.product.brand}</p>
                  <p className="miniCartItemPrice">
                    {
                      data.product.prices.find((price) => {
                        return price.currency === storeCurrency;
                      }).amount
                    }{" "}
                    {storeCurrency}
                  </p>
                </div>
                <div className="attributes">
                  {Object.values(this.props.item.attributes).map(
                    (attribute, i) => (
                      <div
                        className="attribute"
                        style={{
                          backgroundColor: attribute.startsWith("#")
                            ? attribute
                            : "white",
                        }}
                        key={i}
                      >
                        {attribute.startsWith("#") ? "" : attribute}
                      </div>
                    )
                  )}
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
                  <p>{this.props.item.quantity}</p>
                  <button
                    className="miniSmallButton"
                    onClick={() => removeItem(this.props.item)}
                  >
                    -
                  </button>
                </div>
                <div className="imgContainer">
                  <img
                    src={data.product.gallery[0]}
                    className="cartItemImage"
                    alt="cartitemimage"
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

MiniCartItem.contextType = StoreContext;

export default MiniCartItem;
