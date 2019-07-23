import {
    CartActionTypes,
    CART_ADD,
    CART_UPDATE,
    CART_REMOVE,
    CART_CLEAR
} from "./types";
import { Product } from "../../types/types";

export const addToCart = (product: Product, quantity: number): CartActionTypes => ({
    type: CART_ADD,
    payload: {
        product,
        quantity
    }
});

export const updateCart = (product: Product, quantity: number): CartActionTypes => ({
    type: CART_UPDATE,
    payload: {
        product,
        quantity
    }
});

export const removeFromCart = (product: Product): CartActionTypes => ({
    type: CART_REMOVE,
    payload: product
});

export const clearCart = () : CartActionTypes => ({
    type: CART_CLEAR
});
