import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CartSummary extends Component<ICartSummaryProps> {
    getSummary = () => {
        if (this.props.itemCount > 0) {
            return <span>
                {this.props.itemCount} item(s)
                ${this.props.totalPrice.toFixed(2)}
            </span>
        }
        else {
            return <span>You cart: (empty)</span>
        }
    };

    getLinkClasses = () =>{
        return `btn btn-sm bg-dark text-white ${this.props.itemCount === 0 ? "disabled": ""}`;
    };

    render = () => {
        return <div className="float-right">
            <small>
                {this.getSummary()}
                <Link className={this.getLinkClasses()} to="/shop/cart">
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </small>
        </div>
    };
}

interface ICartSummaryProps {
    itemCount: number,
    totalPrice: number
}
