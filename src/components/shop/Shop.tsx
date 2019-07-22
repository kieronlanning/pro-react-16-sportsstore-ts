import React, { Component } from "react";
import { CategoryNavigation } from "../categories/CategoryNavigation";
import { ProductList } from "../products/ProductList";
import { Product } from "../../types/types";

export class Shop extends Component<IShopProps> {
    render = () => {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                </div>
            </div>
            <div className="row">
            <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products"
                        categories={this.props.categories} />
                </div>
                <div className="col-9 p-2">
                    <ProductList products={this.props.products} />
                </div>
            </div>
        </div>
    };
};

interface IShopProps {
    products: Product[],
    categories: string[]
}
