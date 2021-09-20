import React, { Component } from "react";
import StoreContext from "../Context/StoreContext";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import "./MiniCartItem.scss";

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
    }
  }
`;

class MiniCartItem extends Component {
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
                  <p className="miniCartItemPrice">
                    {
                      data.product.prices.find((price) => {
                        return price.currency === storeCurrency;
                      }).amount
                    }{" "}
                    {storeCurrency}
                  </p>
                </div>
                <div className="miniSizeButtons">
                  {this.props.item.attributes.map()}
                  <div className="miniSmallButton size">S</div>
                  <div className="miniSmallButton">M</div>
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
                <img
                  src={data.product.gallery[0]}
                  className="cartItemImage"
                  alt="cartitemimage"
                />
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
