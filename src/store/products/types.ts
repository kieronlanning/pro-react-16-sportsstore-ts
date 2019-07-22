import { Product } from "../../types/types";

export interface IProductsStore {
    products: Product[]
}

export const LOAD_PRODUCTS = "LOAD_PRODUCTS";

export interface ILoadProductsAction {
    type: typeof LOAD_PRODUCTS,
    payload: Product[]
}

export type ProductsActionTypes = ILoadProductsAction;
