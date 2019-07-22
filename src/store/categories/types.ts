export const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export interface ICategoriesStore {
    categories: string[]
}

export interface ILoadCategoriesAction {
    type: typeof LOAD_CATEGORIES,
    payload: string[]
}

export type CategoryActionTypes = ILoadCategoriesAction;
