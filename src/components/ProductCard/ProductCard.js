import React, { Component } from "react";
import { Link } from "react-router-dom";
import {gql} from "apollo-boost"
import {graphql} from "react-apollo"
import "./ProductCard.scss"

const getCurrenciesQuery = gql`
    {
        categories {
            name
        }
    }
`

class ProductCard extends Component {
    render() {
        console.log(this.props)
        return (
          <Link to="/productpage" className="cardContainer">
            <img src="./images/Product D2.png" />
            <img src="./images/Circle Icon.png" className="circleIcon" />
            <p className="productTitle">Apollo Running Short</p>
            <p className="productPrice">$50.00</p>
          </Link>
        );
    }
}

export default graphql(getCurrenciesQuery)(ProductCard);