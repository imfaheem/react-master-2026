import { useState } from "react";
import { StudentDashboard } from "./components/dashboard";
import { StudentCard } from "./components/student-card";
import { StudentForm } from "./components/student-form";
import { StudentList } from "./components/student-list";
import "./styles.css";

const MiniProject = () => {
    // Initial Empty Student Details
    const initialStudent = {
        roll_no: "",
        name: "",
        gender: "",
        age: "",
        address: { h_no: "", street: "", details: ""},
        city: "",
        department: "",
        courses: [],
    };

    // Single Student Initial State
    const [singleStudent, setSingleStudent] = useState(initialStudent);
    
    // List of Students
    const [students, setStudents] = useState([]);
    
    // Single Student to return an Array of a Specific Student
    const [student, setStudent] = useState();

    const [studentName, setStudentName] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e)=> {
        const { name, type, value, checked } = e.target;
        if(type === "checkbox") {
            checked === true ?
            setSingleStudent(prev=> ({...prev, courses: [...prev.courses, value]})) :
            setSingleStudent(prev=> ({...prev, courses: (prev.courses.filter(coursesName => coursesName !== value))}))
        } else if (name.includes("address.")) {
            setSingleStudent(prev => ({...prev, address: {...prev.address, [name.split(".")[1]]: value}}))
        } else {
            if(name === "roll_no") {
                if(students.find(student => student.roll_no === value)) { 
                    alert("Warning! Roll no. can not be same.");
                    return;
                }
            }
            setSingleStudent(prev => ({...prev, [name]: value}))
        }
    }

    const handleFormSubmit = (e)=> {
        e.preventDefault();
        if(isEditing) {
            setStudents(prevStudents =>
                prevStudents.map(student =>
                    student.roll_no === singleStudent.roll_no
                        ? singleStudent
                        : student
                )
            );
            setIsEditing(false);
        } else {
            setStudents(prev => ([...prev, singleStudent]));
            setSingleStudent(initialStudent);
        }
    }

    const handleReset = ()=> {
        setSingleStudent(initialStudent);
        setIsEditing(false);
    }

    const handleStudentDetails = (id)=> {
        setStudent(students.find((student, index) => index === id));
    }

    const handleStudentEdit = (roll_no)=> {
        const student = students.find(student=> student.roll_no === roll_no);
        setSingleStudent(student);
        setIsEditing(true);
    }

    const handleDeleteStudent = (roll_no)=> {
        setStudents(prev =>
            prev.filter(student => student.roll_no !== roll_no)
        );
        if(student?.roll_no === roll_no) {
            setStudent(undefined);
        }
    }

    const handleSearchStudent = ()=> {
        setStudentName(event.target.value);
    }

    const deleteAllStudents = ()=> {
        setStudents([]);
        setStudent(undefined);
        setSingleStudent(initialStudent);
    }

    return (
        <main className="border">
            <h2>Student Management System</h2>
            <StudentDashboard students={students} studentName={studentName} handleSearchStudent={handleSearchStudent} deleteAllStudents={deleteAllStudents} />
            <div className="flex">
                <StudentForm
                    handleFormSubmit={handleFormSubmit}
                    singleStudent={singleStudent}
                    handleChange={handleChange}
                    handleReset={handleReset}
                    isEditing={isEditing}
                />
                <StudentList students={students} handleStudentDetails={handleStudentDetails} handleDeleteStudent={handleDeleteStudent} />
                <StudentCard student={student} students={students} handleStudentEdit={handleStudentEdit} handleDeleteStudent={handleDeleteStudent} />
            </div>
        </main>
    )
}

export default MiniProject;
