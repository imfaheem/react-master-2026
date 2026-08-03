export const StudentList = ({students, handleStudentDetails, handleDeleteStudent}) => {
	return (
		<section>
			<h3>Students List</h3>
			<br />
			{students.length === 0 ? (
				<p>No student available in the list.</p>
			) : (
				<table>
					<thead>
						<tr>
							<th>S.no.</th>
							<th>Name</th>
							<th>Department</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{students.map(({name, department, roll_no }, index)=> (
							<tr key={index}>
								<td>{index+1}.</td>
								<td>{name}</td>
								<td>{department}</td>
								<td>
									<button onClick={()=> handleStudentDetails(index)}>View</button>
									<button onClick={()=> handleDeleteStudent(roll_no)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</section>
	)
}
