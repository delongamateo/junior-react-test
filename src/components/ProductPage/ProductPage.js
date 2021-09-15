import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";
import { withRouter } from "react-router";
import ReactHtmlParser from "react-html-parser";
import "./ProductPage.scss";

const getProductQuery = gql`
  query product($id: String!){
    product(id: $id) {
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
      a: false
    };
  }

  render() {
    console.log(this.props)
    return (
      <div className="productContainer">
        <Query
          query={getProductQuery}
          fetchPolicy="no-cache"
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
                    />
                  ))}
                </div>
                <img
                  src={data.product.gallery[0]}
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
                      <p className="productSize">{attribute.name}</p>
                      <div className="productSizeButtons">
                        {attribute.items.map((item, i) => (
                          <button className="sizeButton" key={i}>
                            {item.displayValue}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="productPriceContainer">
                    <p className="productPrice">PRICE:</p>
                    <p className="productPriceNumber">$50.00</p>
                  </div>
                  <button className="productAddToCart">ADD TO CART</button>
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

export default graphql(getProductQuery)(withRouter(ProductPage));
