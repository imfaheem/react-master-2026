import './App.css';
import { useVisible } from './hooks/useVisible';
import { Navbar } from './components/day8-exercises/Navbar';
import { TodoList } from './components/day8-exercises/todo-list';
import { EasyLevel } from './components/day8-exercises/EasyLevel';
import { MediumLevel } from './components/day8-exercises/MediumLevel';
import { InterviewLevel } from './components/day8-exercises/InterviewLevel';
import MiniProject from './components/day8-exercises/mini-project/mini-project';
import { ReactDashboard } from './components/final-assignment/ReactDashboard';

const App = () => {
	
	const easyLevel = useVisible();
	const mediumLevel = useVisible();
	const interviewLevel = useVisible();
	const todoList = useVisible();
	const miniProject = useVisible();
	
	return (
		<>
			<Navbar
				easyLevel={easyLevel}
				mediumLevel={mediumLevel}
				interviewLevel={interviewLevel}
				todoList={todoList}
				miniProject={miniProject}
			/>
			<div className='flex'>
				{easyLevel.state && <EasyLevel easyLevel={easyLevel.state} toggle={easyLevel.toggle} />}
				{mediumLevel.state && <MediumLevel mediumLevel={mediumLevel.state} toggle={mediumLevel.toggle} />}
				{interviewLevel.state && <InterviewLevel interviewLevel={interviewLevel.state} toggle={interviewLevel.toggle} />}
				{todoList.state && <TodoList todoList={todoList.state} toggle={todoList.toggle} />}
				{miniProject.state && <MiniProject />}
			</div>

			<ReactDashboard />
			
		</>
	)
}

export default App;
