import React from "react";
import { categories } from "../utils/utils";

export const CategoryFilter = React.memo(({ category, handleCategoryChange }) => {
    
    return (
        <div className="category-filter">
            <select value={category} onChange={(e)=> handleCategoryChange(e.target.value)}>
                <option value="All">All Categories</option>
                {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
})
