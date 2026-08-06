import React from "react";
import { products } from "../data/products"

export const CategoryFilter = React.memo(({ category, handleCategoryChange }) => {
    
    return (
        <div className="category-filter">
            <select value={category} onChange={(e)=> handleCategoryChange(e.target.value)}>
                <option value="All">All Categories</option>
                {[...new Set(products.map(product => product.category))].map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
})
