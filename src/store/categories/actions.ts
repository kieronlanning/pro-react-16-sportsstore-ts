import {
    LOAD_CATEGORIES,
    CategoryActionTypes
} from "./types";
import { data as placeholderData } from "../testData/placeholderData";

export const loadCategories = (categories : string[] | null) : CategoryActionTypes => ({
    type: LOAD_CATEGORIES,
    payload: categories || placeholderData.categories
});
