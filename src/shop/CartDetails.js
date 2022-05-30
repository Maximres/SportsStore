import React, {Component} from "react";
import {Link} from "react-router-dom";
import CartDetailsRow from "./CartDetailsRow";

export class CartDetails extends Component {

    getLinkClasses = () => {
        return `btn btn-secondary m-2 ${this.props.cartItems === 0 ? "disabled" : ''}`;
    }

    render() {
        return <div className="m-2">
            <h4 className="text-center">Your Cart</h4>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th>Quantity</th>
                    <th>Product</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Subtotal</th>
                </tr>
                </thead>
                <tbody>
                <CartDetailsRow cart={this.props.cart}
                                cartPrice={this.props.cartPrice}
                                updateQuantity={this.props.updateCart}
                                removeFromCart={this.props.removeFromCart}
                                {...this.props}/>
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-2" to="/shop">Continue shopping</Link>
                <Link className={this.getLinkClasses()} to="/shop/checkout">Checkout</Link>
            </div>
        </div>
    }
}