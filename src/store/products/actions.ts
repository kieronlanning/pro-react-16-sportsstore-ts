import {
    LOAD_PRODUCTS,
    ProductsActionTypes
} from "./types";
import { Product } from "../../types/types";
import { data as placeholderData } from "../testData/placeholderData";

export function loadProducts(products : Product[] | null) : ProductsActionTypes {
    return {
        type: LOAD_PRODUCTS,
        payload: products || placeholderData.products
    };
};
