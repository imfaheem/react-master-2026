
import './App.css'
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { UseEffectHook } from './day-9/UseEffectHook';
import { FinalProject } from './day-9/FinalProject';

function App() {

	const [showUseEffect, setUseEffect] = useState(false);
	const [showProject, setShowProject] = useState(false);
  

  	return (
    	<div className='main-wrapper'>
			<Navbar
				showUseEffect={showUseEffect}
				setUseEffect={setUseEffect}
			/>
			{showUseEffect && <UseEffectHook setShowProject={setShowProject} />}
			{showProject && <FinalProject />}
			
			
    	</div>
  	)
}

export default App;
