import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";
import "./Category.scss";

const getCategoryQuery = gql`
  query category($category: String!) {
    category(input: {title: $category}) {
      products {
        name
        gallery
      }
    }
  }
`;

class Category extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="categoryContainer">
        {this.props.miniCart && <div className="overlay"></div>}
        <h1 className="categoryTitle">
          {this.props.category === "" ? "all" : this.props.category}
        </h1>
        <div className="cards">
          <Query
            query={getCategoryQuery}
            variables={{ category: this.props.category }}
          >
            {({ loading, error, data }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error</p>;
              return data?.category?.products?.map(
                (product, i) => <ProductCard key={i}/>
              );
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default graphql (getCategoryQuery)(Category);
