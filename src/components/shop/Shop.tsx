import React, { Component } from "react";
import { CategoryNavigation } from "../categories/CategoryNavigation";
import { ProductList } from "../products/ProductList";
import { Product } from "../../types/types";
import { CartSummary } from "../cart/CartSummary";
import { ICartDetails } from "../../store/cart/types";
import { addToCart } from "../../store/cart/actions";
import { RouteComponentProps } from "react-router";

export class Shop extends Component<IShopProps> {
    handleAddToCart = (...args: any) => {
        this.props.addToCart(args.product, args.quantity);
        this.props.history.push("/shop/cart");
    };

    render = () => {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                    <CartSummary {...this.props.cart} />
                </div>
            </div>
            <div className="row">
            <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products"
                        categories={this.props.categories} />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={this.props.products} addToCart={this.props.addToCart} />
                </div>
            </div>
        </div>
    };
};

interface IShopProps extends RouteComponentProps<any>, React.Props<any> {
    products: Product[],
    categories: string[],
    cart: ICartDetails,

    addToCart: typeof addToCart
};

