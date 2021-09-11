import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.scss"

class Category extends Component {
    render() {
        return (
          <div className="categoryContainer">
            <h1 className="categoryTitle">{this.props.category}</h1>
            <div className="cards">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        );
    }
}

export default Category