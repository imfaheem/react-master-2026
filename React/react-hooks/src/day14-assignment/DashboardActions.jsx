import { memo } from "react";

export const DashboardActions = memo(({
    onRefresh, 
    onClearSearch
}) => {
    console.log("Child: DashboardAction rendered.");

    return (
        <div className="actionButtons">
            <button className="refresh" onClick={onRefresh}>Refresh Products</button>
            <button className="clear" onClick={onClearSearch}>Clear Search</button>
        </div>
    )
})
