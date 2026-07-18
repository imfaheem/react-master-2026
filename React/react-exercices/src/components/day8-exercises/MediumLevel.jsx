import { useState } from "react";
import { single_student, students, } from "./data";

export const MediumLevel = () => {
    const [student, setStudent] = useState(single_student);
    const [isStudents, setIsStudents] = useState(students);
    const [isActive, setIsActive] = useState(false);
    const [isCourse, setIsCourse] = useState(false);

    const handleStudentUpdate = ()=> {
        setStudent({...student, name: "M. Faheem", city: "Karachi", age: 25});
    }

    const handleCityChange = ()=> {
        setIsStudents(students.map(students => students.name === "Ali" ? {...students, city: "Islamabad" } : students ))
    }

    const handleCourseChange = ()=> {
        setIsStudents(students.map(students => students.name === "Ahmed" ? {...students, course: "Vue.js" } : students ))
    }

    const handleAgeUpdate = ()=> {
        setIsStudents(students.map(students => students.name === "Faheem" ? { ...students, age: 36 } : students ))
    }

    const handleNewStudent = ()=> {
        setIsStudents([...students, 
            {
                id: 4,
                name: "Usman",
                age: 21,
                city: "Multan",
                course: "Next.js",
                isActive: false,
            }
        ])
    }

    const handleRemoveAhmad = ()=> {
        setIsStudents([...isStudents, isStudents.filter(isStudents => isStudents.name !== "Ahmed")])
    }

    const handleIdChange = ()=> {
        setIsStudents(students.map(isStudents => isStudents.id === 2 ? {...isStudents, name: "Ahmad Khan"} : isStudents))
    }

    const handleisActiveStudents = ()=> {
        const inActiveStudents = isStudents.filter(isStudents => isStudents.isActive === false);
        setIsStudents(inActiveStudents);
        setIsActive(true);
    }

    const handleReactStudents = ()=> {
        const reactStudents = isStudents.filter(isStudents => isStudents.course === "React");
        setIsStudents(reactStudents);
        setIsCourse(true);
    }

    const handleNameUppercase = ()=> {
        isStudents.map(isStudents => console.log(isStudents.name.toUpperCase()));
    }

    const handleIsActiveReverse = ()=> {
        setIsStudents(isStudents.map(isStudents => {
            return (
                {...isStudents, isActive: !isStudents.isActive}
            )
        }))
    }

    
    return (
        <div className="flex-1">
            {/* Easy Level */}
            <button onClick={()=> setStudent({...student, name: "Muhammad Faheem Sikandar"})}>Update Name</button>
            <button onClick={()=> setStudent({...student, age: 36})}>Update Age</button>
            <button onClick={()=> setStudent({...student, city: "Islamabad"})}>Update City</button>
            <button onClick={()=> setStudent({...student, course: "Next.js"})}>Update Course</button>
            <button onClick={()=> setStudent({...student, isActive: false})}>Update isActive</button>
            <h4>Updated Student: {JSON.stringify(student)}</h4>
            <button onClick={handleStudentUpdate}>Update student name, city, course</button>
            
            {/* Medium Level */}
            <h4>Updated Students Array: {JSON.stringify(isStudents)}</h4>
            <button onClick={handleCityChange}>Ali City Change</button>
            <button onClick={handleCourseChange}>Ahmad Course Change</button>
            <button onClick={handleAgeUpdate}>Faheem age update</button>
            <button onClick={handleNewStudent}>Add new student</button>
            <button onClick={handleRemoveAhmad}>Remove student Ahmad</button>
            <button onClick={handleIdChange}>id: 2 name change</button>
            <button onClick={handleisActiveStudents}>isActive false print</button>
            <p>{isActive && JSON.stringify(isStudents)}</p>
            
            <button onClick={handleReactStudents}>React students print</button>
            <p>{isCourse && JSON.stringify(isStudents)}</p>

            <button onClick={handleNameUppercase}>students name Uppercase</button>
            <button onClick={handleIsActiveReverse}>all isActive reverse</button>
        </div>
    )
}
