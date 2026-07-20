import './App.css';
import { useState } from 'react';
import { TodoList } from './components/day8-exercises/todo-list';
import { EasyLevel } from './components/day8-exercises/EasyLevel';
import { MediumLevel } from './components/day8-exercises/MediumLevel';
import { InterviewLevel } from './components/day8-exercises/InterviewLevel';
import { Navbar } from './components/day8-exercises/Navbar';
import MiniProject from './components/day8-exercises/mini-project/mini-project';

const App = () => {
	const [easyLevel, setEasyLevel] = useState(true);
	const [mediumLevel, setMediumLevel] = useState(true);
	const [interviewLevel, setInterviewLevel] = useState(true);
	const [todoList, setTodoList] = useState(true);
	const [isMiniProject, setMiniProject] = useState(true);
	
	return (
		<>
			<Navbar
				setEasyLevel={setEasyLevel} 
				setMediumLevel={setMediumLevel}
				setInterviewLevel={setInterviewLevel}
				setTodoList={setTodoList}
				setMiniProject={setMiniProject}
				easyLevel={easyLevel}
				mediumLevel={mediumLevel} 
				interviewLevel={interviewLevel}
				todoList={todoList} 
				isMiniProject={isMiniProject}
			/>
			<div className='flex'>
				{easyLevel && <EasyLevel easyLevel={easyLevel} setEasyLevel={setEasyLevel} />}
				{mediumLevel && <MediumLevel mediumLevel={mediumLevel} setMediumLevel={setMediumLevel} />}
				{interviewLevel && <InterviewLevel interviewLevel={interviewLevel} setInterviewLevel={setInterviewLevel} />}
				{todoList && <TodoList todoList={todoList} setTodoList={setTodoList} />}
				{isMiniProject && <MiniProject />}
			</div>
		</>
	)
}

export default App;
