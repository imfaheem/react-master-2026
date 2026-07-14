import { StudentCard } from "./StudentCard";

export const StudentList = ({students}) => {
	return (
		<div className="flex">
			{students.map(students => (
				<StudentCard
					key={students.id}
					{...students}
				/>
			))}
		</div>
	)
}
