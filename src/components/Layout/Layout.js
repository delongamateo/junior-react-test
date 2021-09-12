import React, { Component } from "react";
import MiniCart from "../MiniCart/MiniCart"
import ProductPage from "../ProductPage/ProductPage"
import Cart from "../Cart/Cart"
import Category from "../Category/Category"
import Nav from "../Nav/Nav"
import "./Layout.scss"

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      category: "Women",
      miniCart: false
    }
  }

  updateCategory = (props) => {
    this.setState({category: props})
  }

  showMiniCart = () => {
    if (this.state.miniCart === false) {
      this.setState({miniCart: true})
    } else {
      this.setState({ miniCart: false });
    }
  }

  render() {
      return (
        <div className="container">
          <Nav
            updateCategory={this.updateCategory}
            showMiniCart={this.showMiniCart}
            category={this.state.category}
          />
          {this.state.miniCart && <MiniCart />}
          {/* <Category category={this.state.category}/> */}
          <Cart />
        </div>
      );
  }
}

export default Layout;