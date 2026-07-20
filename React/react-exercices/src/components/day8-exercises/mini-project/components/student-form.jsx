export const StudentForm = ({
    isEditing,
    singleStudent,
    handleChange,
    handleReset,
    handleFormSubmit,
}) => {
    return (
      	<section>
            <h3>Student Entry Form</h3>
            <form onSubmit={handleFormSubmit}>
                <div className="student-form">
                    <div>
                        <span>Name:</span>
                        <input type="text" name="name" value={singleStudent.name} onChange={handleChange} placeholder="Enter Student Name" />
                    </div>
                    <div>
                        <span>R.no.</span>
                        <input type="text" name="roll_no" value={singleStudent.roll_no} onChange={handleChange} placeholder="Enter number" />
                    </div>
                    <div>
                        <span>Gender:</span>
                        <input type="radio" name="gender" value="Male" checked={singleStudent.gender === "Male"} onChange={handleChange} /> Male | 
                        <input type="radio" name="gender" value="Female" checked={singleStudent.gender === "Female"} onChange={handleChange} /> Female
                    </div>
                    <div>
                        <span>Age</span>
                        <input type="number" name="age" value={singleStudent.age} onChange={handleChange} placeholder="Enter Age" />
                    </div>
                    <div>
                        <span>Address:</span>
                        <div className="flex-1">
                            <input type="text" name="address.h_no" value={singleStudent.address.h_no} onChange={handleChange} placeholder="House No." />
                            <input type="text" name="address.street" value={singleStudent.address.street} onChange={handleChange} placeholder="Street" />
                            <textarea name="address.details" value={singleStudent.address.details} onChange={handleChange} placeholder="Address details" />
                        </div>
                    </div>
                    <div>
                        <span>City:</span>
                        <input type="text" name="city" value={singleStudent.city} onChange={handleChange} placeholder="Enter City" />
                    </div>
                    <div>
                        <span>Department:</span>
                        <select name="department" value={singleStudent.department} onChange={handleChange}>
                            <option value="">- Select Department -</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Computer Science">Computer Science</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Arts & Science">Arts & Science</option>
                        </select>
                    </div>
                    <div>
                        <span>Courses:</span><br />
                        <input type="checkbox" name="courses" value="React" checked={singleStudent.courses.includes("React")} onChange={handleChange} /> React<br />
                        <input type="checkbox" name="courses" value="Angular" checked={singleStudent.courses.includes("Angular")} onChange={handleChange} /> Angular<br />
                        <input type="checkbox" name="courses" value="VueJs" checked={singleStudent.courses.includes("VueJs")} onChange={handleChange} /> Vue.js<br />
                        <input type="checkbox" name="courses" value="NextJS" checked={singleStudent.courses.includes("NextJS")} onChange={handleChange} /> Next JS<br />
                    </div>
                    <div className="button-section">
                        <button type="button" onClick={handleReset}>Reset</button>
                        <button>{isEditing ? "Edit Student" : "Submit"}</button>
                    </div>
                </div>
            </form>
        </section>
    )
}
