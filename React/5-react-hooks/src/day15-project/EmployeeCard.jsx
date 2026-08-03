import React from "react";

export const EmployeeCard = React.memo(({ employee }) => {
    return (
        <>
            <div className="flex">
                <p>{employee.id}. <strong>{employee.name}</strong></p>
                {employee.status === "Active" ? (
                    <div>
                        <span className="active"></span>
                        <small>Active</small>
                    </div>
                    ) : (
                        <div>
                            <span className="inactive"></span>
                            <small>Inactive</small>
                        </div>
                    )}
            </div>
            <div>
                <b>Designation: </b> 
                {employee.department}
                {employee.department === "Frontend" || employee.department === "Backend" ? "Developer" : ""}
            </div>
            <div><b>Salary:</b> Rs. {employee.salary}/-</div>
            <div><b>Experience:</b> {employee.experience} years</div>
        </>
    )
})
