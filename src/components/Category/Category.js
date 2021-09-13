import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Category.scss";

class Category extends Component {
  render() {
    return (
      <div className="categoryContainer">
        {this.props.miniCart && <div className="overlay"></div>}
        <h1 className="categoryTitle">{this.props.category === "" ? "All" : this.props.category}</h1>
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

export default Category;
