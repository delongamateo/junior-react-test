import React, { Component } from "react";
import "./ProductCard.scss"

class ProductCard extends Component {

    render() {
        return (
            <div className="cardContainer">
                <img src="./images/Product D2.png" />
                <img src="./images/Circle Icon.png" className="circleIcon"/>
                <p className="productTitle">Apollo Running Short</p>
                <p className="productPrice">$50.00</p>
            </div>
        )
    }
}

export default ProductCard