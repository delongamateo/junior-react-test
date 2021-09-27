import { gql } from "apollo-boost";

export const getCategoriesQuery = gql`
  {
    categories {
      name
    }
  }
`;

export const getCurrenciesQuery = gql`
  {
    currencies
  }
`;

export const getCategoryQuery = gql`
  query category($category: String!) {
    category(input: { title: $category }) {
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

export const getProductQuery = gql`
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
