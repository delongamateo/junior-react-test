import React, { Component } from "react";
import { getProductQuery } from "../../GraphQL/Queries";
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import ReactHtmlParser from "react-html-parser";
import StoreContext from "../Context/StoreContext";
import { assign, keysIn, indexOf } from "lodash";
import "./ProductPage.scss";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: 0,
      selection: {},
      error: "",
    };
  }

  changeImage = (index) => {
    this.setState({ img: index });
  };

  addSelection = (key, value) => {
    this.setState({
      selection: assign(this.state.selection, { [key]: value }),
    });
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
                      className={
                        indexOf(data.product.gallery, image) === this.state.img
                          ? "sideImage selectedImage"
                          : "sideImage"
                      }
                      alt="sideimage"
                      key={i}
                      onClick={() => this.changeImage(i)}
                    />
                  ))}
                </div>
                <div className="imgContainer">
                  {data.product.inStock === false && (
                    <p className="outOfStock">OUT OF STOCK</p>
                  )}
                  <img
                    src={data.product.gallery[this.state.img]}
                    className="productImage"
                    alt="mainimage"
                  />
                </div>
                <div className="productDetails">
                  <div className="titleContainer">
                    <h2 className="productPageTitle">{data.product.name}</h2>
                    <h2 className="productPageTitle2">{data.product.brand}</h2>
                  </div>
                  {data.product.attributes?.map((attribute, i) => (
                    <div className="productAttributesContainer" key={i}>
                      <p className="productAttribute">{attribute.name}:</p>
                      <div className="productAttributeButtons">
                        {attribute.items.map((item, i) => (
                          <button
                            className={
                              this.state.selection[attribute.name] ===
                              item.value
                                ? "attributeButton selectedAttribute"
                                : "attributeButton"
                            }
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
                  <p>{this.state.error}</p>
                  <button
                    className="productAddToCart"
                    onClick={() => {
                      if (data.product.inStock === false) {
                        this.setState({
                          error: "Product out of stock",
                        });
                      } else if (
                        keysIn(this.state.selection).length ===
                        data.product.attributes.length
                      ) {
                        addItem({
                          id: data.product.id,
                          prices: data.product.prices,
                          attributes: this.state.selection,
                        });
                        this.setState({ selection: {}, error: "" });
                      } else {
                        this.setState({
                          error: "Please select all attributes",
                        });
                      }
                    }}
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
