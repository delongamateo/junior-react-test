import React, { Component } from "react";
import MiniCart from "../MiniCart/MiniCart"
import ProductCard from "../ProductCard/ProductCard"
import ProductPage from "../ProductPage/ProductPage"
import "./Layout.scss"

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      category: "Women",
      miniCart: false
    }
  }

  updateCategory(props) {
    this.setState({category: props})
  }

  showMiniCart() {
    if (this.state.miniCart === false) {
      this.setState({miniCart: true})
    } else {
      this.setState({ miniCart: false });
    }
  }

  render() {
      return (
        <div className="container">
          <nav>
            <div className="categories">
              <button
                className={
                  this.state.category === "Women"
                    ? "selectedCategory"
                    : "category"
                }
                onClick={() => this.updateCategory("Women")}
              >
                WOMEN
              </button>
              <button
                className={
                  this.state.category === "Men"
                    ? "selectedCategory"
                    : "category"
                }
                onClick={() => this.updateCategory("Men")}
              >
                MEN
              </button>
              <button
                className={
                  this.state.category === "Kids"
                    ? "selectedCategory"
                    : "category"
                }
                onClick={() => this.updateCategory("Kids")}
              >
                KIDS
              </button>
            </div>
            <div className="logoContainer">
              <img src="./images/a-logo.png" alt="logo" />
            </div>
            <div className="currencyAndCart">
              <select className="currencies">
                <option value="volvo">$ USD</option>
                <option value="saab">€ EUR</option>
                <option value="mercedes">¥ JPY</option>
              </select>
              <img
                src="./images/Empty Cart.png"
                alt="cart"
                className="cart"
                onClick={() => this.showMiniCart()}
              />
            </div>
          </nav>
          {this.state.miniCart && <MiniCart />}
          <div>
            <ProductPage />
            {/* <h1 className="categoryTitle">{this.state.category}</h1>
            <div className="cards">
              
            </div> */}
          </div>
        </div>
      );
  }
}

export default Layout;