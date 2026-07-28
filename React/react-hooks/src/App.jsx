
import './App.css'
import { useState } from 'react';
import { Navbars } from './components/Navbars';
import { UseEffectHook } from './day-9/UseEffectHook';
import { FinalProject } from './day-9/FinalProject';
import { UseRefHook } from './day-10/UseRefHook';
import { ContextApi } from './day-10/ContextApi';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthContext } from './context/AuthContext';
import { ThemeContext } from './context/ThemeContext';
import { LanguageContext } from './context/LanguageContext';
import { Dashboard } from './components/Dashboard';
import { ThemeSwitcher } from './context/ThemeSwitcher';
import { Users } from './components/Users';
import { CustomHooks } from './day-11/CustomHooks';
import { ReactMemo } from './day-12-13/ReactMemo';
import { Parent } from './react-memo-components/Parent';

function App() {
	const [count, setCount] = useState(0);
	const [showUseRef, setUseRef] = useState(false);
  	const [showUseEffect, setUseEffect] = useState(false);
	const [showProject, setShowProject] = useState(false);
	const [showContextApi, setContextApi] = useState(false);
	const [showReactMemo, setReactMemo] = useState(false);
	const [customHook] = useState(false);

	const [theme, setTheme] = useState("light");

	const toggleTheme = ()=> {
		setTheme(prev => prev === "dark" ? "light" : "dark");
	}

  	return (
    	<div className='main-wrapper'>
			<Navbars
				setUseRef={setUseRef}
				setUseEffect={setUseEffect}
				showUseEffect={showUseEffect}
				setContextApi={setContextApi}
				setReactMemo={setReactMemo}
			/>
			<div className='flex'>
				<div className='flex-1'>
					{showUseEffect && <UseEffectHook setShowProject={setShowProject} />}
					{showProject && <FinalProject />}
					{showUseRef && <UseRefHook />}

					<LanguageContext.Provider value="English">
						<ThemeContext.Provider value="dark">
							<AuthContext.Provider value="Faheem">
								<Navbar />
							</AuthContext.Provider>
							<Dashboard />
							<Home />
						</ThemeContext.Provider>
						<Footer />
					</LanguageContext.Provider>

					<ThemeSwitcher.Provider value={{theme, toggleTheme}}>
						{showContextApi && <ContextApi />}
					</ThemeSwitcher.Provider>
					{customHook && <Users /> }

					<button onClick={()=> setCount(prev => prev+1)}>Count: {count}</button>
					{showReactMemo && (
						<>
							<ReactMemo count={count} />
							<Parent />
						</>
					)}

					
				</div>

				{customHook && <CustomHooks /> }
			</div>
    	</div>
  	)
}

export default App;
