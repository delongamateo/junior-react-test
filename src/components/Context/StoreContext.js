import React, { Component } from "react";
import { findIndex, isEqual, cloneDeep } from "lodash";

const StoreContext = React.createContext();

const getInitialContextState = () => {
  return (
    JSON.parse(localStorage.getItem("jrt-web-shop-state")) || {
      items: [],
      storeCurrency: "USD",
      selectedCategory: "",
    }
  );
};

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialContextState();
  }

  addItem = (item) => {
    this.setState((state) => {
      let items = cloneDeep(state.items);
      const index = findIndex(
        items,
        (currentItem) =>
          currentItem.id === item.id &&
          isEqual(currentItem.attributes, item.attributes)
      );
      if (index > -1) {
        items[index].quantity++;
      } else {
        items = items.concat({ ...item, quantity: 1 });
      }
      return {
        items,
      };
    });
  };

  removeItem = (item) => {
    let newItems = cloneDeep(this.state.items);
    for (let i = 0; i < newItems.length; i++) {
      if (isEqual(item, newItems[i])) {
        if (newItems[i].quantity > 1) {
          newItems[i].quantity = newItems[i].quantity - 1;
        } else {
          let index = findIndex(newItems, newItems[i]);
          newItems.splice(index, 1);
        }
      }
    }
    this.setState({ items: newItems });
  };

  updateCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  changeCurrency = (currency) => {
    this.setState({ storeCurrency: currency });
  };

  componentDidUpdate(_, prevState) {
    localStorage.setItem("jrt-web-shop-state", JSON.stringify(this.state));
  }

  render() {
    const { items, storeCurrency, selectedCategory } = this.state;
    const { addItem, removeItem, changeCurrency, updateCategory } = this;
    return (
      <StoreContext.Provider
        value={{
          items,
          storeCurrency,
          selectedCategory,
          addItem,
          removeItem,
          changeCurrency,
          updateCategory,
        }}
      >
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default StoreContext;
