import { memo } from "react";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeList = memo(({
    employees,
    handleEmployeeView,
    handleEmployeeDelete,
}) => {
    return (
        <div className="employee-list">
            {employees.length ?
                employees.map((employee) => (
                <div key={employee.id} className="employee-card">
                    <EmployeeCard employee={employee} />
                    <div className="action-buttons">
                        <button className="view" onClick={()=> handleEmployeeView(employee.id)}>View</button>
                        <button className="delete" onClick={()=> handleEmployeeDelete(employee.id)}>Delete</button>
                    </div>
                </div>
            )): (
                <p>No Employee Available...</p>
            )}
        </div>
    )
})
