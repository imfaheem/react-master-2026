import { memo } from "react";

export const DashboardStats = memo(({ employeesStats }) => {
    return (
        <div className="flex">
            <p className="flex-1">Total Employees: {employeesStats.total_employees}</p>
            <p className="flex-1">Active Employees: {employeesStats.active_employees}</p>
            <p className="flex-1">Inactive Employees: {employeesStats.inactive_employees}</p>
        </div>
    )
})
