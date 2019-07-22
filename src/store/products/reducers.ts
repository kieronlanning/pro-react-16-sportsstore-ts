import { IProductsStore, ProductsActionTypes, LOAD_PRODUCTS } from "./types";

const initialState: IProductsStore = {
    products: []
};

export function productsReducer(state = initialState, action: ProductsActionTypes) : IProductsStore {
    switch(action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        default:
            return state;
    }
};
