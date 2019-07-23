import { Product } from "../../types/types";

export const CART_ADD = "CART_ADD";
export const CART_UPDATE = "CART_UPDATE";
export const CART_REMOVE = "CART_REMOVE";
export const CART_CLEAR = "CART_CLEAR";

export interface ICartStore {
    cart: ICartDetails
}

export interface ICartDetails {
    items: ICartItem[],
    totalPrice: number,
    itemCount: number
}

export interface ICartItem {
    product: Product;
    quantity: number;
    totalPrice: number;
}

export interface IAddToCartAction {
    type: typeof CART_ADD,
    payload: {
        product: Product,
        quantity: number
    }
}

export interface IUpdateCartAction {
    type: typeof CART_UPDATE,
    payload: {
        product: Product,
        quantity: number
    }
}

export interface IRemoveFromCartAction {
    type: typeof CART_REMOVE,
    payload: Product
}

export interface IClearCartAction {
    type: typeof CART_CLEAR
}

export type CartActionTypes = IAddToCartAction | IUpdateCartAction | IRemoveFromCartAction | IClearCartAction;
