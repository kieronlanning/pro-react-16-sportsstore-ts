import React, { Component } from "react";
import { updateCart, removeFromCart } from "../../store/cart/actions";
import { ICartDetails } from "../../store/cart/types";
import { Product } from "../../types/types";

export class CartDetailsRow extends Component<ICartDetailsRowProps> {
    handleChange = (product: Product, event: React.FormEvent<HTMLInputElement>) => {
        this.props.updateCart(product, event.currentTarget.valueAsNumber);
    };

    render = () => {
        if (this.props.cart.itemCount === 0) {
            return <tr>
                <td colSpan={5}>Your cart is empty.</td>
            </tr>
        }

        return <React.Fragment>
            {this.props.cart.items.map(item => 
                <tr key={item.product.id}>
                    <td>
                        <input type="number" value={item.quantity} onChange={e => this.handleChange(item.product, e)} />
                    </td>
                    <td>{item.product.name}</td>
                    <td>${item.product.price.toFixed(2)}</td>
                    <td>${(item.totalPrice).toFixed(2)}</td>
                    <td>
                        <button className="btn btn-sm btn-danger" onClick={() => this.props.removeFromCart(item.product)}>
                            Remove
                        </button>
                    </td>
                </tr>
            )}
        </React.Fragment>
    };
};

interface ICartDetailsRowProps {
    cart: ICartDetails,

    updateCart: typeof updateCart
    removeFromCart: typeof removeFromCart
}
