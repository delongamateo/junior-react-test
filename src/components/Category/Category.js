import React, { PureComponent } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { getCategoryQuery } from "../../GraphQL/Queries";
import { Query } from "react-apollo";
import StoreContext from "../Context/StoreContext";
import "./Category.scss";

class Category extends PureComponent {
  render() {
    const { selectedCategory } = this.context;
    return (
      <div className="categoryContainer">
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
