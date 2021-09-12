import React, { Component } from "react"
import "./App.scss";
import MiniCart from "./components/MiniCart/MiniCart";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


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
      <Router>
        <div className="app">
          <div className="container">
            <Nav
              updateCategory={this.updateCategory}
              showMiniCart={this.showMiniCart}
              category={this.state.category}
            />
            {this.state.miniCart && (
              <MiniCart showMiniCart={this.showMiniCart} />
            )}
            <Switch>
              <Route exact path="/">
                <Category category={this.state.category} />
              </Route>
              <Route path="/productpage">
                <ProductPage />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
