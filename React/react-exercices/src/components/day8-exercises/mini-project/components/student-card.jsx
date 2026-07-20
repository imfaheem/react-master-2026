export const StudentCard = ({student, handleStudentEdit, handleDeleteStudent}) => {

    return (
        <section>
            <h3>Students Card</h3>
            {student ? (
                <div className="student-card">
                    <p><b>Name:</b> {student.name}</p>
                    <p><b>Age:</b> {student.age}</p>
                    <p><b>Roll no.</b> {student.roll_no}</p>
                    <p><b>Gender:</b> {student.gender}</p>
                    <div><b>Address:</b> 
                        <p>
                            House no. {student.address.h_no}, {student.address.street}, {student.address.details},
                            <br />{student.city}
                        </p>
                    </div>
                    <p><b>Department:</b> {student.department}</p>
                    <p><b>Courses:</b> {student.courses.map((course, index) => <span key={index} style={{display: 'block'}}>{index+1}. {course}</span>)}</p>
                    <div className="action-buttons">
                        <button className="edit" onClick={()=> handleStudentEdit(student.roll_no)}>Edit</button>
                        <button className="delete" onClick={()=> handleDeleteStudent(student.roll_no)}>Delete</button>
                    </div>
                </div>
            ): <p>No Student Details...</p>}
        </section>
    )
}
