import React from 'react';
import cart from "./cart.svg";

function Checkout(props) {

    const bought = props.database.filter((product) => {
        if (product.bought === true) {
            return true;
        }
    });

    const count = bought.length;

    return (
        <div className="checkout">
            <a href="#/checkout">
                <img src={cart} alt="Cart" />
                <span className="counter">
                    {count}
                </span>
            </a>
        </div>
    );
}

export default Checkout;