import { products } from "../data/products";

export const CATEGORY_TYPES = {
    Electronics: "#4090BD",
    Fashion: "#980000",
    Accessories: "#808080",
    Home: "#E88BA0",
    Sports: "#6aa84f"
};

export const categories = [...new Set(products.map(
    products => products.category
))];
