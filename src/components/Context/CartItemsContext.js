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
      console.log(state)
      const items = state.items.concat(item);
      console.log(items)
      return {
        items
      };
    });
  };

  removeItem = (item) => {
    const newItems = this.state.items
    const indexOfItem = this.state.items.findIndex(
      (product) => product.id === item.id
    );
    if(indexOfItem > -1) {
      newItems.splice(indexOfItem, 1).sort();
      this.setState(newItems)
    }
  }

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
    const { addItem, removeItem, changeCurrency } = this;
    return (
      <CartItemsContext.Provider value={{ items, storeCurrency, addItem, removeItem, changeCurrency }}>
        {this.props.children}
      </CartItemsContext.Provider>
    );
  }
}

export default CartItemsContext;
