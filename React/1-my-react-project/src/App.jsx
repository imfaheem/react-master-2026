import './App.css';
import { Header } from './Header';
import { students } from './utils';
import { StudentCard } from './StudentCard';
import { Footer } from './Footer';
import { Counter } from './Counter';
import { Forms } from './Forms';

function App() {

	return (
		<div className='flex'>
			<div className='flex-1'>
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
			</div>
			<div className='flex-1'>
				<h3>useState Hook</h3>
				<Counter />
			</div>
			<div className='flex-1'>
				<h3>Forms, Controlled Components & Single source of Trust</h3>
				<Forms />
			</div>
		</div>
	)
}

export default App;
