export const StudentCard = ({id, name, age, course, active, marks, city, gender, email}) => {

	let bgColor;
	if(course === "React") {
		bgColor = "lightblue";
	} else if(course === "Angular") {
		bgColor = "lightpink";
	} else if(course === "JavaScript") {
		bgColor = "lightyellow";
	} else {
		bgColor = "lightgreen";
	}

	const handleStudentDetails = (name, course, marks) => {
		console.log(name);
		console.log(marks ?? "Marks Not Available");
		console.log(course);
	}
	
	return (
		<div className="studentCard" style={{backgroundColor: bgColor}}>
			<p>{id}. {name}</p>
			<p>{age}</p>
			<p>{gender}</p>
			<small>{email}</small>
			<p>{city}</p>
			<p>{active === true ? "🟢 Active" : "🔴 Inactive"}</p>
			<p>{course === "React" ? "❤️ Favorite Course" : "📘 Other Course"}</p>
			<p>{marks >= 80 ? "🏆 Excellent" : marks >= 60 ? "👍 Good" : marks >= 40 ? "🙂 Average" : "❌ Failed"}</p>
			<p>{marks ?? "Marks Not Available"}</p>
			<p>{marks > 80 && "⭐ Top Performer"}</p>
			<button onClick={()=> {handleStudentDetails(name, course, marks)}}>View Profile</button>
		</div>
	)
}
