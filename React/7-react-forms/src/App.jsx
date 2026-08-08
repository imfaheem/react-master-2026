import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { FormHook } from './pages/FormHook'
import { FormHookPractice } from './pages/FormHookPractice'
import { FormHookExercise } from './pages/FormHookExercise'
import { FormHookProject } from './pages/FormHookProject'

function App() {
  
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' end element={<FormHook />} />
				<Route path='form-hook/practice' end element={<FormHookPractice />} />
				<Route path='form-hook/exercise' end element={<FormHookExercise />} />
				<Route path='form-hook/project' end element={<FormHookProject />} />
			</Route>
		</Routes>
	)
}

export default App
