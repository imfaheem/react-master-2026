import React from "react";

export const FilterPanel = React.memo(({
    sortBy,
    selectBy,
    employees,
    setSelectBy,
    searchValue,
    selectedSalary,
    selectedExperience,
    selectedDepartment,
    handleEmployeeSort,
    handleSearchChange,
    handleSelectedSalary,
    handleDepartmentChange,
    handleExperienceChange,
}) => {
    return (
        <div className="filter-panel">
            <div className="search-bar">
                <select value={selectBy} onChange={(e) => setSelectBy(e.target.value)}>
                    <option value="name">By Name</option>
                    <option value="department">By Department</option>
                </select>
                <input
                    type="text"
                    name={selectBy}
                    value={searchValue}
                    onChange={(e) => handleSearchChange(e)}
                    placeholder={`Search Employee By ${selectBy.charAt(0).toUpperCase() + selectBy.slice(1)}...`}
                />
            </div>
            <div className="select-filters">
                <select value={sortBy} onChange={(e) => handleEmployeeSort(e)}>
                    <option value="">Sort By:</option>
                    <option value="ascendingName">Name A - Z</option>
                    <option value="descendingName">Name Z - A</option>
                    <option value="ascendingDepartment">Department A - Z</option>
                    <option value="descendingDepartment">Department Z - A</option>
                    <option value="ascendingSalary">Salary Low - High</option>
                    <option value="descendingSalary">Salary High - Low</option>
                    <option value="ascendingExperience">Experience Low - High</option>
                    <option value="descendingExperience">Experience High - Low</option>
                </select>
                <select value={selectedDepartment} onChange={(e)=> handleDepartmentChange(e)}>
                    <option value="All">Select Department</option>
                    {Array.from(new Set(employees.map(dept => dept.department))).map(dept => (
                        <option key={dept} value={dept}>
                            {dept}
                        </option>
                    ))}
                </select>
                 <select value={selectedSalary} onChange={(e)=> handleSelectedSalary(e)}>
                    <option value="All">Select Salary</option>
                    <option value="50000">Less than 50000</option>
                    <option value="50000-100000">50000 to 100000</option>
                    <option value="100000-150000">100000 to 150000</option>
                    <option value="150000-200000">150000 to 200000</option>
                    <option value="200000-250000">200000 to 250000</option>
                    <option value="250000-300000">250000 to 300000</option>
                    <option value="300000">More than 300000</option>
                </select>
                <select value={selectedExperience} onChange={(e) => handleExperienceChange(e)}>
                    <option value="All">Select Experience</option>
                    <option value="1">Less than 1 year</option>
                    <option value="3">1 to 3 years</option>
                    <option value="5">3 to 5 years</option>
                    <option value="8">5 to 8 years</option>
                    <option value="12">8 to 12 years</option>
                    <option value="13">More than 12 years</option>
                </select>
            </div>
        </div>
    )
})
