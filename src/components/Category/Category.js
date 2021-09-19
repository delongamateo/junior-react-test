import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";
import StoreContext from "../Context/StoreContext";
import "./Category.scss";

const getCategoryQuery = gql`
  query category($category: String!) {
    category(input: {title: $category}) {
      products {
        id
        name
        inStock
        gallery
        description
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
  }
`;

class Category extends Component {

  render() {
    const { selectedCategory } = this.context;
    return (
      <div className="categoryContainer">
        {this.props.miniCart && <div className="overlay"></div>}
        <h1 className="categoryTitle">
          {selectedCategory === "" ? "all" : selectedCategory}
        </h1>
        <div className="cards">
          <Query
            query={getCategoryQuery}
            variables={{ category: selectedCategory }}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error</p>;
              return data?.category?.products?.map((product, i) => (
                <ProductCard key={i} product={product} />
              ));
            }}
          </Query>
        </div>
      </div>
    );
  }
}

Category.contextType = StoreContext;

export default Category;
