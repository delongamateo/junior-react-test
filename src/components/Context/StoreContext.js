import React, { Component } from "react";

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
    if(true) { /* check if item exist */

    } else { 
      
    }
    this.setState((state) => {
      const items = state.items.concat(item);
      return {
        items,
      };
    });
  };

  removeItem = (item) => {
    const newItems = this.state.items;
    const indexOfItem = this.state.items.findIndex(
      (product) => product.id === item.id
    );
    if (indexOfItem > -1) {
      newItems.splice(indexOfItem, 1);
      this.setState(newItems);
    }
  };

  /* selectOption = (item, selectedAttribute, value) => {
    const attributesIndex = item.attributes.findIndex(
      (attribute) => attribute.id === selectedAttribute
    );

    const itemsIndex = item.attributes[attributesIndex].items.findIndex(
      (item) => item.id === value
    );

    console.log(itemsIndex);
  }; */

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
