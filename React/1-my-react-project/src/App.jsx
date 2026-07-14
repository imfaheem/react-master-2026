import './App.css'
import { Footer } from './Footer';
import { Header } from './Header';
import { StudentCard } from './StudentCard';
import { students } from './utils';

function App() {

	return (
		<>
			<Header name="Muhammad Faheem Sikandar" />

			{students.map(({id, name, age, course, ...rest})=> (
				<StudentCard
					key={id}
					id={id}
					name={name}
					age={age}
					course={course}
					rest={rest}
				/>
			))}

			<Footer />

		</>
	)
}

export default App
