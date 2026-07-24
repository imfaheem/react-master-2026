import { useEffect, useState } from "react"

export const FinalProject = () => {
    const initialStudent = {
        name: "",
        roll_no: "",
        age: "",
        gender: "",
        address: {
            house_no: "",
            street: "",
            details: "",
        },
        city: "",
        discipline: "",
        courses: []
    }

    const [singleStudent, setSingleStudent] = useState(initialStudent);
    const [students, setStudents] = useState(() => {
        const studentList = localStorage.getItem("studentList");
        return studentList ? JSON.parse(studentList) : [];
    });

    const handleChange = (event)=> {
        const {name, type, value, checked} = event.target;

        if(type === "checkbox") {
            checked === true ? 
            setSingleStudent(prev => ({...prev, courses: [...prev.courses, value]})) :
            setSingleStudent(prev => ({...prev, courses: (prev.courses.filter(course => course !== value))}))
        } else if (name.includes("address.")) {
            setSingleStudent(prev => ({...prev, address: {...prev.address, [name.split(".")[1]]: value }}))
        } else {
            setSingleStudent(prev => ({...prev, [name]: value}));
        }
    }

    const handleFormSubmit = (e)=> {
        e.preventDefault();
        setStudents(prev=> [...prev, singleStudent]);
        setSingleStudent(initialStudent);
    }

    const handleReset = () => {
        setSingleStudent(initialStudent);
    }

    useEffect(()=> {
        localStorage.setItem("studentList", JSON.stringify(students))
        console.log(students);
    }, [students])

    return (
        <div>
            <h2>Final Project</h2>
            <form onSubmit={handleFormSubmit}>
                <div>Name: <input type="text" name="name" value={singleStudent.name} onChange={handleChange} /></div>
                <div>Roll No. <input type="text" name="roll_no" value={singleStudent.roll_no} onChange={handleChange} /></div>
                <div>Age: <input type="text" name="age" value={singleStudent.age} onChange={handleChange} /></div>
                <div>Gender:
                <input name="gender" type="radio" value="Male" checked={singleStudent.gender === "Male"} onChange={handleChange} /> Male
                <input name="gender" type="radio" value="Female" checked={singleStudent.gender === "Female"} onChange={handleChange} /> Female</div>
                <div>Address: <input name="address.house_no" value={singleStudent.address.house_no} onChange={handleChange} />
                    <input name="address.street" value={singleStudent.address.street} onChange={handleChange} />
                    <input name="address.details" value={singleStudent.address.details} onChange={handleChange} />
                </div>
                <div>City: <input type="text" name="city" value={singleStudent.city} onChange={handleChange} /></div>
                <div>Discipline: <select name="discipline" value={singleStudent.discipline} onChange={handleChange}>
                        <option value="">- Select Discipline -</option>
                        <option value="IT">Information Tech</option>
                        <option value="CS">Computer Science</option>
                        <option value="Engg">Enginneering</option>
                    </select>
                </div>
                <div>Courses: <br />
                    <input type="checkbox" name="courses" value="React" checked={singleStudent.courses.includes("React")} onChange={handleChange} />React <br /> 
                    <input type="checkbox" name="courses" value="Angular" checked={singleStudent.courses.includes("Angular")} onChange={handleChange} />Angular <br /> 
                    <input type="checkbox" name="courses" value="Next" checked={singleStudent.courses.includes("Next")} onChange={handleChange} />Next <br /> 
                    <input type="checkbox" name="courses" value="Vue" checked={singleStudent.courses.includes("Vue")} onChange={handleChange} />Vue <br /> 
                </div>
                <button type="button" onClick={handleReset}>Reset</button> <button>Submit Form</button>
            </form>
        </div>
    )
}
