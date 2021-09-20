import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql, Query } from "react-apollo";

const getProductQuery = gql`
  query product($a: String!) {
    product(id: $a) {
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

class Test extends Component {
  render() {
    console.log(this.props);
    return (
      <Query query={getProductQuery} variables={{ a: "ps-5" }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          return <p>a</p>;
        }}
      </Query>
    );
  }
}

export default graphql(getProductQuery)(Test);
