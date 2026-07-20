export const StudentDashboard = ({students, studentName, deleteAllStudents, handleSearchStudent}) => {

    const totalStudents = students.length;
    const totalDepartments = [...new Set(students.map(student => student.department))].length;

    return (
        <section>
            <h3>Student Dashboard - Statistics</h3>
            <div>
                <p>Total Students: {totalStudents ?? "NA"}</p>
                <p>Total Departments: {totalDepartments}</p>
                <p>Search Student: <input type="text" value={studentName} onChange={handleSearchStudent} placeholder="Search Student name" /></p>
                <button onClick={deleteAllStudents}>Delete All Students</button>
            </div>
        </section>
    )
}
