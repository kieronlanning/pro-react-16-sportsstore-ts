import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Shop } from "./Shop";

// Store (reducx)
import { AppState } from "../../store";
import { loadCategories } from "../../store/categories/actions";
import { loadProducts } from "../../store/products/actions";

// Type system
import { Product } from "../../types/types";

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
                        products={filterProducts(this.props.products, routeProps.match.params.category) } />
                }
            />
            <Redirect to="/shop/products" />>
        </Switch>
    };
};

interface IShopConnectorProps {
    loadCategories: typeof loadCategories,
    loadProducts: typeof loadProducts,

    categories: string[],
    products: Product[]
}

const mapStateToProps = (dataStore: AppState) => ({
    categories: dataStore.categories.categories,
    products: dataStore.products.products
});

const mapDispatchToPros = ({
    loadCategories,
    loadProducts    
});

 const ShopConnector = connect(
    mapStateToProps,
    mapDispatchToPros
) (ShopConnectorImpl);

export { ShopConnector };