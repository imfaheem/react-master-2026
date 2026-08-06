import React from "react";

export const SearchBar = React.memo(({ search, handleSearchChange }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                value={search}
                placeholder="Search Product Title"
                onChange={(e)=> handleSearchChange(e.target.value)}
            />
        </div>
    )
})
