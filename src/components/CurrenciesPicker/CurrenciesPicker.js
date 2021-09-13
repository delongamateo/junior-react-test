import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";
import "./CurrenciesPicker.scss"

const getCurrenciesQuery = gql`
  {
    currencies
  }
`;

class CurrenciesPicker extends Component {
    render() {
        console.log(this.props)
        return (
          <div className="currenciesContainer">
            {this.props.data?.currencies?.map((currency) => (
              <p className="currency" onClick={() => this.props.changeCurrency(currency)} >
                {currency}
              </p>
            ))}
          </div>
        );
    }
}

export default graphql(getCurrenciesQuery)(CurrenciesPicker);