import React, {Component} from "react";
import {Link} from 'react-router-dom';

export class CartSummary extends Component {

    getSummary = () => {
        if (this.props.cartItems > 0){
            return <span>
            {this.props.cartItems} item's,
            ${Number(this.props.cartPrice).toFixed(2)}
        </span>
        }

        return <span>Your cart is empty</span>
    }

    getLinkClasses = () => {
        return "btn btn-small bg-dark text-white " + (this.props.cartItems <= 0 ? "disabled" : "");
    }

    render() {
        return <div className="float-right">
            <small>
                {this.getSummary()}
                <Link className={this.getLinkClasses()} to="/shop/cart">
                    <i className="fa fa-shopping-cart"/>
                </Link>
            </small>
        </div>
    }

}