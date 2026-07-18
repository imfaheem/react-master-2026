import { useState } from "react";
import { newStdList } from "./data";

export const InterviewLevel = ({interviewLevel, setInterviewLevel}) => {
    const [students, setStudents] = useState(newStdList);

    const [searchInput, setSearchInput] = useState("");
    const [countStudents, setCountStudents] = useState("");
    const [activeStudents, setActiveStudents] = useState();

    const handleSearchInput = ()=> {
        setSearchInput(event.target.value);
    }

    const filteredStudents = students.filter(students => students.name.startsWith(searchInput));

    const handleActiveStudents = ()=> {
        const activeStudents = students.filter(students => students.isActive === true)
        setActiveStudents(activeStudents.length);
    };

    const addNewStudent = ()=> {
        setStudents([...students, {id: 5, name: "M. Faheem", age:22, city:"Karachi", course:"Angular", isActive:true }])
    }

    const deleteStudent = ()=> {
        setStudents(students.filter(student=> student.id !== 2));
    }

    const editStudentCity = () => {
        setStudents(students.map(student => student.id === 4 ? {...student, city: "Multan"} : student))
    }

    const reverseIsActive = () => {
        setStudents(students.map(students => ({...students, isActive: !students.isActive })));
    }

    const averageAge = ()=> {
        const showAge = students.map(students => students.age);
        const studentAverageAge = Math.floor(showAge.reduce((acc,val)=> acc + val, 0)/showAge.length);
        console.log(studentAverageAge);

        // Show Average Student age in the UI
        setStudents(students.filter(studentAge => studentAge.age === studentAverageAge));
    }

    const minimumAge = ()=> {
        const showAge = Math.min(...students.map(students => students.age));
        console.log(showAge);
        setStudents(students.filter(students => students.age === showAge));
    }

    const maximumAge = ()=> {
        const showAge = Math.max(...students.map(students => students.age));
        console.log(showAge);
        setStudents(students.filter(students => students.age === showAge));
    }

    const uniqueCourse = ()=> {
        setStudents(students.filter(courses => courses.course === "React" || courses.course === "Angular" || courses.course === "Vue"));
    }

    const ageGroup18To25 = () => {
        const ageGroups = students.filter(students => students.age >= 18 && students.age <= 25);
        setStudents(ageGroups);
    }

    const ageGroup26To35 = () => {
        const ageGroups = students.filter(students => students.age >= 26 && students.age <= 35);
        setStudents(ageGroups);
    }

    const handleSingleClick = ()=> {
        setStudents(prev => prev.filter(students => students.name !== "Ahmed"));
        setStudents(prev => prev.map(age => age.name === "Ali" ? {...age, age: 30} : age));
        setStudents(prev => prev.map(course => course.name === "Faheem" ? {...course, course: "Next.js"} : course));
        setStudents(prev => prev.filter(active => active.isActive === true));
        setStudents(prev => prev.toSorted((a, b)=> a.age - b.age));
        setStudents(prev => [...prev, { id: 5, name: "Bilal", age: 24, city: "Multan", course: "React",isActive: true}])
    }

    const handleClickDifferently = ()=> {
        setStudents(prev => [
            ...prev
            .filter(students => students.name !== "Ahmed" && students.isActive == true)
            .map(students => (students.name == "Ali" ? {...students, age: 30} : students))
            .toSorted((a, b)=> a.age - b.age),
            { id: 5, name: "Bilal", age: 24, city: "Multan", course: "React",isActive: true}
        ])
    }
    
    return (
        <div className="flex-1">
            {/* Hard Medium Level (Real Projects) */}
            <h2>Phase 4: React Real Project (Questions 41 - 55)</h2>
            <div>
                Search Input: <input type="text" onChange={handleSearchInput} value={searchInput} />
                <p>{searchInput !== "" && filteredStudents.map(students => JSON.stringify(students))}</p>
            </div>
            <button onClick={()=> setCountStudents(students.length)}>Total Students: {countStudents}</button> 
            <button onClick={handleActiveStudents}>Active Students</button> : {activeStudents}
            <button onClick={addNewStudent}>Add New Student</button>
            <button onClick={deleteStudent}>Delete Student</button>
            <button onClick={editStudentCity}>Edit Student City</button>
            <button onClick={reverseIsActive}>Reverse IsActive</button>
            <button onClick={averageAge}>Average Age</button>
            <button onClick={minimumAge}>Minimum Age</button>
            <button onClick={maximumAge}>Maximum Age</button>
            <button onClick={uniqueCourse}>unique Course</button>
            <button onClick={ageGroup18To25}>Age Group 18 to 25</button>
            <button onClick={ageGroup26To35}>Age Group 26 to 35</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Course</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(({id, name, age, city, course, isActive}) => (
                        <tr key={id}>
                            <td>{id}.</td>
                            <td>{name}</td>
                            <td>{age}</td>
                            <td>{city}</td>
                            <td>{course}</td>
                            <td>{isActive ? "Active" : "In Active"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleSingleClick}>Question no. 55</button>
            <button onClick={handleClickDifferently}>Question no. 55 Again</button>

            <br />
            <div className="center-aligned">
                <button onClick={()=> setInterviewLevel(!interviewLevel)}>{interviewLevel ? "Hide" : "Show"} Interview Level</button>
            </div>
        </div>
    )
}
