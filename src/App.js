import React, { Component } from "react"
import "./App.scss";
import MiniCart from "./components/MiniCart/MiniCart";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Nav from "./components/Nav/Nav";


class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "Women",
      miniCart: false,
    };
  }

  updateCategory = (props) => {
    this.setState({ category: props });
  };

  showMiniCart = () => {
    if (this.state.miniCart === false) {
      this.setState({ miniCart: true });
    } else {
      this.setState({ miniCart: false });
    }
  };
  
  render() {
    return (
      <div className="app">
        <div className="container">
          <Nav
            updateCategory={this.updateCategory}
            showMiniCart={this.showMiniCart}
            category={this.state.category}
          />
          {this.state.miniCart && <MiniCart />}
          
        </div>
      </div>
    );
  }
}

export default App;
