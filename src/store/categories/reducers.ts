import {
    CategoryActionTypes,
    LOAD_CATEGORIES,
    ICategoriesStore
} from "./types";

const initialState: ICategoriesStore = {
    categories: []
};

export function categoriesReducer(state = initialState, action: CategoryActionTypes) : ICategoriesStore {
    switch(action.type) {
        case LOAD_CATEGORIES:
                return {
                    ...state,
                    categories: action.payload
                };
        default:
            return state;
    }
};
