export type Product = {
    id: number,
    name: string,
    category: string,
    description: string,
    price: number
};

export type RootData = {
    categories: string[],
    products: Product[]
};

export type StoreData = {
    categories: string[],
    products: Product[]
};
