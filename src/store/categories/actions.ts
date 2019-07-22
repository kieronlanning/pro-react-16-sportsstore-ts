import {
    LOAD_CATEGORIES,
    CategoryActionTypes
} from "./types";
import { data as placeholderData } from "../testData/placeholderData";

export function loadCategories(categories : string[] | null) : CategoryActionTypes {
    return {
        type: LOAD_CATEGORIES,
        payload: categories || placeholderData.categories
    };
};
