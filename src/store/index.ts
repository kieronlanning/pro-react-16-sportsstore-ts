import { createStore, combineReducers/*, applyMiddleware */ } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { categoriesReducer } from "./categories/reducers";
import { productsReducer } from "./products/reducers";
import { cartReducers } from "./cart/reducers";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducers
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    // const middlewares = [thunkMiddleware];
    // const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools()
    );

    return store;
};
