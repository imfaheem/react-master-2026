import './App.css'
import { Cities } from './Cities'
import { Student } from './Student'

function App() {

	const handleClick = ()=> {
		console.log("Button event is clicked!!");
	}

	const handleNewClick = ()=> {
		alert("Button event is called automatically!!");
	}

	const handleInputChange = (event) => {
		console.log(event.target.value);
	}

	return (
		<>
			<h1>Hello! Welcome to React.</h1>

			<Student
				name="Faheem"
				age="35"
				course="English"
			/>
			<Cities />

			<button className='eventBtn' onClick={handleClick}>Click me!</button>
			<button className='eventBtn' onClick={handleNewClick()}>Click me Again!</button>
			
			<div className='m-block-20'>
				<input onChange={handleInputChange} />
			</div>
		</>
	)
}

export default App
