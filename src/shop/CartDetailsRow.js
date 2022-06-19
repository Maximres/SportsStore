import React, {Component} from "react";

export default class CartDetailsRow extends Component {

    render(){
        if (!this.props.cart || !this.props.cart.length)
            return <tr><td colSpan={5} className="text-center">Your cart is empty</td></tr>;

        return <React.Fragment>
            {this.props.cart.map(item => {
                return <tr key={item.product.id}>
                    <td>
                        <input type="number" value={item.quantity}
                               onChange={(ev) => this.handleChange(item.product, ev)} />
                    </td>
                    <td>{item.product.name}</td>
                    <td>{item.product.price && item.product.price.toFixed(2)}</td>
                    <td>{(item.quantity * item.product.price).toFixed(2)}</td>
                    <td>
                        <button className="btn btn-danger btn-sm" onClick={
                                ()=> this.props.removeFromCart(item.product)}>
                            REMOVE
                        </button>
                    </td>
                </tr>
            })}
            <tr>
                <th className="text-right" colSpan={3}>Total:</th>
                <th className="text-right" colSpan={2}>{this.props.cartPrice.toFixed(2)}</th>
            </tr>
        </React.Fragment>
    }

    handleChange = (product, ev) => {
        this.props.updateQuantity(product, ev.target.value);
    }
}