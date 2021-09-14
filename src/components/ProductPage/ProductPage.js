import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";
import { withRouter } from "react-router";
import "./ProductPage.scss";

const getProductQuery = gql`
  {
    product(id: "ps-5") {
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
  
  render() {
    console.log(this.props);
    return (
      <div className="productContainer">
        <Query
          query={getProductQuery}
          variables={{ product: this.props.match.params.id }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;
            return (
              <>
                <div className="sideImages">
                  {this.props.data.product.gallery.map((image, i) => (
                    <img src={image} className="sideImage" alt="sideimage" key={i}/>
                  ))}
                </div>
                <img
                  src={this.props.data.product.gallery}
                  className="productImage"
                  alt="mainimage"
                />
                <div className="productDetails">
                  <div className="titleContainer">
                    <h2 className="productPageTitle">
                      {this.props.data.product.name}
                    </h2>
                    <h2 className="productPageTitle2">
                      {this.props.data.product.brand}
                    </h2>
                  </div>
                  <div className="productSizeContainer">
                    <p className="productSize">SIZE:</p>
                    <div className="productSizeButtons">
                      <button className="sizeButton">XS</button>
                      <button className="sizeButton">S</button>
                      <button className="sizeButton">M</button>
                      <button className="sizeButton">L</button>
                    </div>
                  </div>
                  <div className="productPriceContainer">
                    <p className="productPrice">PRICE:</p>
                    <p className="productPriceNumber">$50.00</p>
                  </div>
                  <button className="productAddToCart">ADD TO CART</button>
                  <p className="productDescription">
                    Find stunning women's cocktail dresses and party dresses.
                    Stand out in lace and metallic cocktail dresses and party
                    dresses from all your favorite brands.
                  </p>
                </div>
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default graphql(getProductQuery)(withRouter(ProductPage));
