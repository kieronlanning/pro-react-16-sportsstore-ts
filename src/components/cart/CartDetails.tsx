import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartDetailsRow } from "./CartDetailsRow";
import { ICartDetails } from "../../store/cart/types";
import { updateCart, removeFromCart } from "../../store/cart/actions";

export class CartDetails extends Component<ICartDetailsProps> {
    getLinkClasses = () => {
        return `btn btn-secondary m-1 ${this.props.cart.itemCount === 0 ? "disabled": ""}`;
    };

    render = () => {
        return <div className="m-3">
            <h2 className="text-center">Your Cart</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Sub-total</th>
                    </tr>
                </thead>
                <tbody>
                    <CartDetailsRow cart={this.props.cart} updateCart={this.props.updateCart} removeFromCart={this.props.removeFromCart} />
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/shop">Continune Shopping</Link>
                <Link className={this.getLinkClasses()} to="/shop/checkout">Checkout</Link>
            </div>
        </div>
    };
}

interface ICartDetailsProps {
    cart: ICartDetails,

    updateCart: typeof updateCart,
    removeFromCart: typeof removeFromCart
}
