export const StudentCard = (props) => {
    const handleStudentName = (name)=> {
        console.log(name)
    }
    return (
        <div className="">
            <p>{props.id}. Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Course: {props.course}</p>
            <p>Status: {props.rest.active === true ? "🟢 Active" : "🔴 Inactive"}</p>
            <p>Marks: {props.rest.marks >= 80 ? "⭐ Top Performer" : "Needs Improvement"}</p>
            <button onClick={()=> handleStudentName(props.name)}>View Profile</button>
            <br /><br />
        </div>
    )
}
