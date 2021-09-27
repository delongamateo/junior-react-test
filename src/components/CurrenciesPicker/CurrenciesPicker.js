import React, { PureComponent } from "react";
import { getCurrenciesQuery } from "../../GraphQL/Queries";
import { graphql } from "react-apollo";
import StoreContext from "../Context/StoreContext";
import "./CurrenciesPicker.scss";

class CurrenciesPicker extends PureComponent {
  render() {
    const { changeCurrency } = this.context;
    return (
      <div className="currenciesContainer">
        {this.props.data?.currencies?.map((currency, i) => (
          <p
            className="currency"
            onClick={() => {
              changeCurrency(currency);
              this.props.toggleCurrenciesPicker();
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
