import { useState, useMemo, useCallback } from "react";
import { initialEmployees } from "../data/employees";
import { EmployeeList } from "./EmployeeList";
import { FilterPanel } from "./FilterPanel";
import { DashboardStats } from "./DashboardStats";
import { EmployeeCard } from "./EmployeeCard";

export const EmployeeDashboard = () => {

    const [sortBy, setSortBy] = useState("");
    const [theme, setTheme] = useState("light");
    const [selectBy, setSelectBy] = useState("name");
    const [searchValue, setSearchValue] = useState("");
    const [selectedSalary, setSelectedSalary] = useState("All");
    const [employees, setEmployees] = useState(initialEmployees);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [selectedExperience, setSelectedExperience] = useState("All");
    const [selectedDepartment, setSelectedDepartment] = useState("All");

    // Theme Styles on Condition
    const themeStyles = {
        backgroundColor: theme === "light" ? "#ffffff" : "#333333",
        color: theme === "light" ? "#000000" : "#ffffff"
    }

    const handleEmployeeSort = useCallback(event => setSortBy(event.target.value), []);
    const handleSearchChange = useCallback(event => setSearchValue(event.target.value), []);
    const handleSelectedSalary = useCallback(event => setSelectedSalary(event.target.value), []);
    const handleExperienceChange = useCallback(event => setSelectedExperience(event.target.value), []);
    const handleDepartmentChange = useCallback(event => setSelectedDepartment(event.target.value), []);
    
    // Search Employees by Name or by Department
    const filteredEmployees = useMemo(()=>{
        let result = employees.filter((employee) => {
            const fieldValue = employee[selectBy] ?? "";
            return fieldValue.toLowerCase().includes(searchValue.trim().toLowerCase());
        });

        // Sort Employees List
        if(sortBy !== "") {
            result = [...result].sort((a, b) => {
                switch(sortBy) {
                    case "ascendingName":
                        return a.name.localeCompare(b.name);
                    case "descendingName":
                        return b.name.localeCompare(a.name);
                    case "ascendingDepartment":
                        return a.department.localeCompare(b.department);
                    case "descendingDepartment":
                        return b.department.localeCompare(a.department);
                    case "ascendingSalary":
                        return a.salary - b.salary;
                    case "descendingSalary":
                        return b.salary - a.salary;
                    case "ascendingExperience":
                        return a.experience - b.experience;
                    case "descendingExperience":
                        return b.experience - a.experience;
                    default:
                        return 0;
                }
            })
        }

        // Select Employees by Salary Ranges
        if (selectedSalary !== "All") {
            if (selectedSalary === "50000") {
                result = result.filter(emp => emp.salary < 50000)
            } else if (selectedSalary === "300000") {
                result = result.filter(emp => emp.salary > 300000)
            } else {
                const [minSalary, maxSalary] = selectedSalary.split("-").map(Number);
                result = result.filter(emp => emp.salary >= minSalary && emp.salary <= maxSalary)
            }
        }

        // Select Employees by Department
        if(selectedDepartment !== "All") {
            result = result.filter(dept => dept.department === selectedDepartment);
        }

        // Select Employees by Experience
        if(selectedExperience !== "All") {
            // Intentionally less than 1.
            if(selectedExperience === "1") {
                result = result.filter(exp => exp.experience < 1);
            } else if (selectedExperience === "3") {
                result = result.filter(exp => exp.experience <= 3);
            } else if (selectedExperience === "5") {
                result = result.filter(exp => exp.experience > 3 && exp.experience <= 5);
            } else if (selectedExperience === "8") {
                result = result.filter(exp => exp.experience > 5 && exp.experience <= 8);
            } else if (selectedExperience === "12") {
                result = result.filter(exp => exp.experience > 8 && exp.experience <= 12);
            } else {
                result = result.filter(exp => exp.experience > 12);
            }
        }

        return result;
    }, [sortBy, selectBy, employees, searchValue, selectedSalary, selectedDepartment, selectedExperience,])

    // View Specific Employee
    const handleEmployeeView = useCallback((id) => {
        const foundEmployee = employees.find((emp) => emp.id === id);
        setSelectedEmployee(foundEmployee);
    }, [employees])

    // Delete Specific Employee
    const handleEmployeeDelete = useCallback((id) => {
        setEmployees(previousEmployees => 
            previousEmployees.filter(emp => emp.id !== id)
        )
    }, [setEmployees])

    // Employees Statistics
    const calculateEmployeeStats = useMemo(() => {
        const totalEmployees = employees.length;
        const activeEmployees = employees.filter(emp => emp.status === "Active").length;
        const inActiveEmployees = employees.filter(emp => emp.status === "Inactive").length;
        return {
            total_employees: totalEmployees,
            active_employees: activeEmployees,
            inactive_employees: inActiveEmployees
        }
    }, [employees])

    return (
        <div className="employee-dashboard" style={themeStyles}>
            <h2 style={themeStyles}>Employee Dashboard</h2>
            <div className="toggle-switch">
                <label>
                    <input 
                        type="checkbox"
                        checked={theme === "dark"}
                        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
                    />
                    {theme === "light" ? "Dark" : "Light"} Mode
                </label>
            </div>
            <FilterPanel
                sortBy={sortBy}
                selectBy={selectBy}
                employees={employees}
                setSelectBy={setSelectBy}
                searchValue={searchValue}
                selectedSalary={selectedSalary}
                selectedExperience={selectedExperience}
                selectedDepartment={selectedDepartment}
                handleEmployeeSort={handleEmployeeSort}
                handleSearchChange={handleSearchChange}
                handleSelectedSalary={handleSelectedSalary}
                handleDepartmentChange={handleDepartmentChange}
                handleExperienceChange={handleExperienceChange}
            />
            <DashboardStats
                employeesStats={calculateEmployeeStats}
            />
            {selectedEmployee ? (
                <section className="employee-card">
                    <EmployeeCard employee={ selectedEmployee } />
                    <button onClick={()=> setSelectedEmployee(null)}>Back to All Employees</button>
                </section>
            ) : (
                <EmployeeList
                    employees={filteredEmployees}
                    handleEmployeeView={handleEmployeeView}
                    handleEmployeeDelete={handleEmployeeDelete}
                />
            )}
        </div>
    )
}
