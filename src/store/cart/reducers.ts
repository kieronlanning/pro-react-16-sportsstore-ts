import { ICartStore, CartActionTypes, CART_ADD, CART_UPDATE, CART_REMOVE, CART_CLEAR } from "./types";

const initialState: ICartStore = {
    cart: {
        items: [],
        itemCount: 0,
        totalPrice: 0 
    }
};

export function cartReducers(state = initialState, action: CartActionTypes): ICartStore {
    const updatedCart = {
        ...state.cart
    };

    switch(action.type) {
        case CART_ADD:
            const product = action.payload.product;
            const quantity = action.payload.quantity;

            const existing = updatedCart.items.find(item => item.product.id === product.id);
            if (existing) {
                existing.quantity += quantity;
                existing.totalPrice = product.price * existing.quantity;
            }
            else {
                updatedCart.items = [
                    ...updatedCart.items,
                    {
                        product,
                        quantity,
                        totalPrice: product.price * quantity
                    }
                ]
            }

            updatedCart.itemCount += quantity;
            updatedCart.totalPrice += (product.price * quantity);

            return {
                ...state,
                cart: updatedCart
            };
        case CART_UPDATE:
            updatedCart.items = updatedCart.items.map(item => {
                if (item.product.id === action.payload.product.id) {
                    const diff = action.payload.quantity - item.quantity;

                    updatedCart.itemCount += diff;
                    updatedCart.totalPrice += (item.product.price * diff);
                    
                    item.quantity += diff;

                    return {
                        product: action.payload.product,
                        totalPrice: item.product.price * item.quantity,
                        quantity: item.quantity
                    };
                }

                return item;
            });

            const response = {
                ...state,
                cart: updatedCart
            };

            return response;
        case CART_REMOVE:
            const itemsToRemove = updatedCart.items.filter(item => item.product.id === action.payload.id);
            if (itemsToRemove.length === 1) {
                const itemToRemove = itemsToRemove[0];

                updatedCart.itemCount -= itemToRemove.quantity;
                updatedCart.totalPrice -= itemToRemove.totalPrice;
                
                updatedCart.items = updatedCart.items.filter(item => item !== itemToRemove);
            }

            return {
                ...state,
                cart: updatedCart
            };
        case CART_CLEAR:
            const clearedCart: ICartStore = {
                cart: {
                  itemCount: 0,
                  items: [],
                  totalPrice: 0  
                }
            };

            return {
                ...state,
                ...clearedCart
            };
        default:
            return state;
    }
}