import React, { Component } from "react";
import StoreContext from "../Context/StoreContext";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "./CartItem.scss";

const getProductQuery = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      gallery
      prices {
        currency
        amount
      }
      brand
    }
  }
`;

class CartItem extends Component {
  render() {
    const { addItem, removeItem, storeCurrency } = this.context;
    return (
      <Query query={getProductQuery} variables={{ id: this.props.item.id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          return (
            <div className="cartItem">
              <div className="cartItemInfo">
                <p className="cartItemName">{data.product.name}</p>
                <p className="cartItemName2">{data.product.brand}</p>
                <p className="cartItemPrice">
                  {
                    data.product.prices.find((price) => {
                      return price.currency === storeCurrency;
                    }).amount
                  }{" "}
                  {storeCurrency}
                </p>
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
              <div className="quantityAndImage">
                <div className="quantity">
                  <button
                    className="smallButton"
                    onClick={() => addItem(this.props.item)}
                  >
                    +
                  </button>
                  <p>{this.props.item.quantity}</p>
                  <button
                    className="smallButton"
                    onClick={() => removeItem(this.props.item)}
                  >
                    -
                  </button>
                </div>
                <img
                  src={data.product.gallery[0]}
                  alt="cartitemimg"
                  className="cartitemimg"
                />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

CartItem.contextType = StoreContext;

export default CartItem;
