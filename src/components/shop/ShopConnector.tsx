import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Shop } from "./Shop";

// Redux: Store definition/ shape.
import { AppState } from "../../store";
// Redux: Actions for dispatching into the store.
import { loadCategories } from "../../store/categories/actions";
import { loadProducts } from "../../store/products/actions";
import { addToCart, updateCart, removeFromCart, clearCart } from "../../store/cart/actions";

// Type system
import { Product } from "../../types/types";
import { ICartDetails } from "../../store/cart/types";
import { CartDetails } from "../cart/CartDetails";

const filterProducts = (products: Product[] = [], category: string) =>
    (!category || category === "All")
    ? products
    : products.filter(p => p.category.toLowerCase() === category.toLowerCase());

class ShopConnectorImpl extends Component<IShopConnectorProps> {
    componentDidMount = () => {
        this.props.loadCategories(null);
        this.props.loadProducts(null);
    };

    render = () => {
        return <Switch>
            <Route
                path="/shop/products/:category?"
                render={routeProps =>
                    <Shop {...this.props} {...routeProps}
                        products={filterProducts(this.props.products, routeProps.match.params.category)} />
                }
            />
            <Route
                path="/shop/cart"
                render={routeProps =>
                    <CartDetails {...routeProps}
                        cart={this.props.cart}
                        updateCart={this.props.updateCart}
                        removeFromCart={this.props.removeFromCart} /> 
                    }
            />
            <Redirect to="/shop/products" />>
        </Switch>
    };
};

interface IShopConnectorProps {
    loadCategories: typeof loadCategories,
    loadProducts: typeof loadProducts,

    addToCart: typeof addToCart,
    updateCart: typeof updateCart,
    removeFromCart: typeof removeFromCart,
    clearCart: typeof clearCart,

    categories: string[],
    products: Product[],
    cart: ICartDetails
}

const mapStateToProps = (dataStore: AppState) => ({
    categories: dataStore.categories.categories,
    products: dataStore.products.products,
    cart: dataStore.cart.cart
});

const mapDispatchToPros = ({
    loadCategories,
    loadProducts,
    
    addToCart,
    updateCart,
    removeFromCart,
    clearCart
});

 const ShopConnector = connect(
    mapStateToProps,
    mapDispatchToPros
) (ShopConnectorImpl);

export { ShopConnector };