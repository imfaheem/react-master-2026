import { students } from "../data/students"

export const Stats = () => {
	
	const totalStudents = students.length;
	const activeStudents = students.filter(status => status.active === true).length;
	const inactiveStudents = students.filter(status => status.active === false).length;

	return (
		<div className="m-20">
			<p>Total Students : {totalStudents}</p>
			<p>Active Students : {activeStudents}</p>
			<p>Inactive Students : {inactiveStudents}</p>
		</div>
	)
}
