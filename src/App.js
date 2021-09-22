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
import StoreContext from "./components/Context/StoreContext";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      miniCart: false,
      currenciesPicker: false,
    };
  }

  toggleMiniCart = () => {
    if (this.state.miniCart === false) {
      this.setState({ miniCart: true });
      this.setState({ currenciesPicker: false });
    } else {
      this.setState({ miniCart: false });
    }
  };

  toggleCurrenciesPicker = () => {
    if (this.state.currenciesPicker === false) {
      this.setState({ currenciesPicker: true });
      this.setState({ miniCart: false });
    } else {
      this.setState({ currenciesPicker: false });
    }
  };

  render() {
    const { selectedCategory } = this.context;
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <div className="container">
              <Nav
                toggleMiniCart={this.toggleMiniCart}
                toggleCurrenciesPicker={this.toggleCurrenciesPicker}
                currenciesPicker={this.state.currenciesPicker}
              />
              {this.state.miniCart && <div className="overlay"></div>}
              {this.state.currenciesPicker && (
                <CurrenciesPicker
                  toggleCurrenciesPicker={this.toggleCurrenciesPicker}
                />
              )}
              {this.state.miniCart && (
                <MiniCart toggleMiniCart={this.toggleMiniCart} />
              )}
              <Switch>
                <Route exact path={`/${selectedCategory}`}>
                  <Category />
                </Route>
                <Route exact path="/productpage/:id">
                  <ProductPage />
                </Route>
                <Route exact path="/cart">
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

App.contextType = StoreContext;

export default App;
