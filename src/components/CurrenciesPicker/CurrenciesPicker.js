import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import StoreContext from "../Context/StoreContext";
import "./CurrenciesPicker.scss";

const getCurrenciesQuery = gql`
  {
    currencies
  }
`;

class CurrenciesPicker extends Component {
  render() {
    const { changeCurrency } = this.context;
    return (
      <div className="currenciesContainer">
        {this.props.data?.currencies?.map((currency, i) => (
          <p
            className="currency"
            onClick={() => {
              changeCurrency(currency);
              this.props.showCurrenciesPicker();
            }}
            key={i}
          >
            {currency}
          </p>
        ))}
      </div>
    );
  }
}

CurrenciesPicker.contextType = StoreContext;

export default graphql(getCurrenciesQuery)(CurrenciesPicker);
