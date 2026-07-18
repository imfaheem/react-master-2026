import './App.css';
import { TodoList } from './components/day8-exercises/todo-list';
//import { EasyLevel } from './components/day8-exercises/EasyLevel';
//import { MediumLevel } from './components/day8-exercises/MediumLevel';
//import { InterviewLevel } from './components/day8-exercises/InterviewLevel';

const App = () => {
	return (
		<div className='flex'>
			{/* <EasyLevel /> */}
			{/* <MediumLevel /> */}
			{/* <InterviewLevel /> */}
			<TodoList />
		</div>
	)
}

export default App;
