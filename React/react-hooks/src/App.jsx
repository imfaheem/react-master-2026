
import './App.css'
import { useCallback, useState } from 'react';
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
import { MemoExample } from './day-14-15/MemoExample';
import { UseCallback } from './day-14-15/UseCallback';
import { UserDashboard } from './day14-mini-project/UserDashboard';
import { ProductDashboard } from './day14-assignment/ProductDashboard';
import { UseMemo } from './day-14-15/UseMemo';

function App() {
	const [count, setCount] = useState(0);
	const [showUseRef, setUseRef] = useState(false);
  	const [showUseEffect, setUseEffect] = useState(false);
	const [showContextApi, setContextApi] = useState(false);
	const [showCallback, setUseCallback] = useState(false);
	const [showReactMemo, setReactMemo] = useState(false);
	const [showUseMemo, setUseMemo] = useState(false);

	const [showProject, setShowProject] = useState(false);
	const [customHook] = useState(false);
	const [dummyValue, setDummyValue] = useState("");

	const [theme, setTheme] = useState("light");

	const toggleTheme = ()=> {
		setTheme(prev => prev === "dark" ? "light" : "dark");
	}

	const handleDummyValue = ()=> {
		setDummyValue("Same Value Printed.")
	}

	const handleButtonClick = useCallback(()=> {
        console.log("Button Clicked");
		setCount(prev=> prev+1);
    }, [])

  	return (
    	<div className='main-wrapper'>
			<Navbars
				setUseRef={setUseRef}
				setUseEffect={setUseEffect}
				showUseEffect={showUseEffect}
				setContextApi={setContextApi}
				setReactMemo={setReactMemo}
				setUseCallback={setUseCallback}
				setUseMemo={setUseMemo}
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

					{showUseMemo && <UseMemo />}

					{showCallback && (
						<>
							<MemoExample dummyValue={dummyValue} />
							<button onClick={handleDummyValue}>Show Dummy Value</button>
							<UseCallback dummyValue={dummyValue} handleButtonClick={handleButtonClick}  />
						</>
						)
					}
				</div>

				{customHook && <CustomHooks /> }
				{showCallback && (
					<>
						<UserDashboard />
						<ProductDashboard />
					</>
				) }
			</div>
    	</div>
  	)
}

export default App;
