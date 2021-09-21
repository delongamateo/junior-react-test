import React, { Component } from "react";
import { findIndex, isEqual, cloneDeep } from "lodash";

const StoreContext = React.createContext();

export class Store extends Component {
  documentData;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      storeCurrency: "USD",
      selectedCategory: "",
    };
  }

  addItem = (item) => {
    console.log(item);
    this.setState((state) => {
      let items = cloneDeep(state.items);
      console.log(items);
      const index = findIndex(
        items,
        (currentItem) =>
          currentItem.id === item.id &&
          isEqual(currentItem.attributes, item.attributes)
      );
      console.log(index);
      if (index > -1) {
        items[index].quantity++;
      } else {
        items = items.concat({ ...item, quantity: 1 });
      }
      console.log(items);
      return {
        items,
      };
    });
  };

  removeItem = (item) => {
    console.log(item);
    let newItems = cloneDeep(this.state.items);
    console.log(newItems);
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
    console.log(category);
    this.setState({ selectedCategory: category });
    console.log(this.state.selectedCategory);
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
