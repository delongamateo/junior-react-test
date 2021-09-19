import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";
import { withRouter } from "react-router";
import ReactHtmlParser from "react-html-parser";
import StoreContext from "../Context/StoreContext";
import { assign } from "lodash";
import "./ProductPage.scss";

const getProductQuery = gql`
  query product($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency
        amount
      }
      brand
    }
  }
`;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 0,
      selection: {},
    };
  }

  changeImage = (index) => {
    this.setState({ img: index });
  };

  addSelection = (key, value) => {
    console.log(this.state);
    this.setState({
      selection: assign(this.state.selection, { [key]: value }),
    });
    console.log(this.state);
  };

  render() {
    const { addItem, storeCurrency } = this.context;
    return (
      <div className="productContainer">
        <Query
          query={getProductQuery}
          variables={{ id: this.props.match.params.id }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return (
              <>
                <div className="sideImages">
                  {data.product.gallery.map((image, i) => (
                    <img
                      src={image}
                      className="sideImage"
                      alt="sideimage"
                      key={i}
                      onClick={() => this.changeImage(i)}
                    />
                  ))}
                </div>
                <img
                  src={data.product.gallery[this.state.img]}
                  className="productImage"
                  alt="mainimage"
                />
                <div className="productDetails">
                  <div className="titleContainer">
                    <h2 className="productPageTitle">{data.product.name}</h2>
                    <h2 className="productPageTitle2">{data.product.brand}</h2>
                  </div>
                  {data.product.attributes?.map((attribute, i) => (
                    <div className="productSizeContainer" key={i}>
                      <p className="productSize">{attribute.name}:</p>
                      <div className="productSizeButtons">
                        {attribute.items.map((item, i) => (
                          <button
                            className="sizeButton"
                            key={i}
                            style={{
                              backgroundColor:
                                attribute.type === "swatch"
                                  ? item.value
                                  : "none",
                            }}
                            onClick={() =>
                              this.addSelection(attribute.name, item.value)
                            }
                          >
                            {attribute.type === "swatch" ? "" : item.value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="productPriceContainer">
                    <p className="productPrice">PRICE:</p>
                    <p className="productPriceNumber">
                      {
                        data.product.prices.find((price) => {
                          return price.currency === storeCurrency;
                        }).amount
                      }{" "}
                      {storeCurrency}
                    </p>
                  </div>
                  <button
                    className="productAddToCart"
                    onClick={() =>
                      addItem({
                        id: data.product.id,
                        attributes: this.state.selection
                      })
                    }
                  >
                    ADD TO CART
                  </button>
                  <div className="productDescription">
                    {ReactHtmlParser(data.product.description)}
                  </div>
                </div>
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}

ProductPage.contextType = StoreContext;

export default withRouter(ProductPage);
