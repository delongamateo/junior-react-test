import React, { Component } from "react";

const CartItemsContext = React.createContext();

export class CartItems extends Component {
  documentData;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      storeCurrency: "USD",
    };
  }

  addItem = (item) => {
    this.setState((state) => {
      const items = state.items.concat(item);
      return {
        items,
      };
    });
  };

  changeCurrency = (currency) => {
    this.setState({ storeCurrency: currency });
  };

  componentDidUpdate(prevState) {
    if (this.state.items !== prevState.items) {
      localStorage.setItem("items", JSON.stringify(this.state));
    }
  }

  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem("items"));

    if (localStorage.getItem("items")) {
      this.setState(this.documentData);
    } else {
      this.setState({ items: [] });
    }
  }

  render() {
    const { items, storeCurrency } = this.state;
    const { addItem, changeCurrency } = this;
    return (
      <CartItemsContext.Provider value={{ items, storeCurrency, addItem, changeCurrency }}>
        {this.props.children}
      </CartItemsContext.Provider>
    );
  }
}

export default CartItemsContext;
