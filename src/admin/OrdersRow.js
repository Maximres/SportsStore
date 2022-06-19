import React from "react";

const calcTotal = products => products.reduce((total, p) =>
    total += p.quantity * p.product.price, 0).toFixed(2)

const getShipping = order => order.shipped
    ? <i className="fa fa-shipping-fast text-success"/>
    : <i className="fa fa-exclamation-circle text-danger"/>

const OrdersRow = (props) => {
    return (<tr>
        <td>{props.order.id}</td>
        <td>{props.order.name}</td>
        <td>{props.order.email}</td>
        <td className="text-right">
            ${calcTotal(props.order.products)}
        </td>
        <td className="text-center">
            <button className="btn btn-sm btn-block bg-muted"
                    onClick={props.toggleShipped}>
                {getShipping(props.order)}
                <span>
                 {props.order.shipped
                     ? " Shipped" : " Pending"}
                 </span>
            </button>
        </td>
    </tr>)
}

export default OrdersRow;