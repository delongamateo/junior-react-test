import React, { Component } from "react";
import { Link } from "react-router-dom";
import {gql} from "apollo-boost"
import {graphql} from "react-apollo"
import "./ProductCard.scss"

class ProductCard extends Component {
    render() {
        console.log(this.props.product)
        return (
          <Link to="/productpage" className="cardContainer">
            <img src={this.props.product.gallery[0]} className="productImage"/>
            <img src="./images/Circle Icon.png" className="circleIcon" />
            <p className="productTitle">{this.props.product.name}</p>
            <p className="productPrice">{this.props.product.prices[0].amount}</p>
          </Link>
        );
    }
}

export default ProductCard;