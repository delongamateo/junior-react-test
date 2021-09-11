import React, { Component } from "react";
import "./ProductPage.scss";

class ProductPage extends Component {
  render() {
    return (
      <div className="productContainer">
        <div className="sideImages">
          <img src="./images/Product D (1).png" />
          <img src="./images/Product D (1).png" />
          <img src="./images/Product D (1).png" />
        </div>
        <div className="imageContainer">
          <img src="./images/Product D2.png" />
        </div>
        <div className="productDetails">
          <div className="titleContainer">
            <h2 className="productPageTitle">Apollo</h2>
            <h2 className="productPageTitle2">Running Short</h2>
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
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
      </div>
    );
  }
}

export default ProductPage;
