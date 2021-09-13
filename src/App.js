import React, { Component } from "react";
import "./App.scss";
import MiniCart from "./components/MiniCart/MiniCart";
import CurrenciesPicker from "./components/CurrenciesPicker/CurrenciesPicker";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "Clothes",
      miniCart: false,
      currenciesPicker: false,
      storeCurrency: "USD"
    };
  }

  updateCategory = (category) => {
    this.setState({ category: category });
  };

  showMiniCart = () => {
    if (this.state.miniCart === false) {
      this.setState({ miniCart: true });
    } else {
      this.setState({ miniCart: false });
    }
  };

  showCurrenciesPicker = () => {
    if (this.state.currenciesPicker === false) {
      this.setState({ currenciesPicker: true });
    } else {
      this.setState({ currenciesPicker: false });
    }
  }

  changeCurrency = (currency) => {
    this.setState({ storeCurrency: currency });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <div className="container">
              <Nav
                updateCategory={this.updateCategory}
                showMiniCart={this.showMiniCart}
                category={this.state.category}
                showCurrenciesPicker={this.showCurrenciesPicker}
                storeCurrency={this.state.storeCurrency}
              />
              {this.state.currenciesPicker && (
                <CurrenciesPicker changeCurrency={this.changeCurrency} />
              )}
              {this.state.miniCart && (
                <MiniCart showMiniCart={this.showMiniCart} />
              )}
              <Switch>
                <Route exact path="/">
                  <Category category={this.state.category} />
                </Route>
                <Route path="/tech">
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
      </ApolloProvider>
    );
  }
}

export default App;
