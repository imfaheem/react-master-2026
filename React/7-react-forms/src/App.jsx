import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { FormHook } from './pages/FormHook'
import { FormHookPractice } from './pages/FormHookPractice'
import { FormHookExercise } from './pages/FormHookExercise'
import { FormHookProject } from './pages/FormHookProject'
import { StylesLayout } from './layouts/StylesLayout'
import { ProductCard } from './components/product-card/ProductCard'
import { UserCard } from './components/user-card/UserCard'

function App() {
  
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' end element={<FormHook />} />
				<Route path='form-hook/practice' end element={<FormHookPractice />} />
				<Route path='form-hook/exercise' end element={<FormHookExercise />} />
				<Route path='form-hook/project' end element={<FormHookProject />} />
				<Route path='css-styles' element={<StylesLayout />}>
					<Route index element={<Navigate to="product-card" replace />} />
					<Route path='product-card' element={<ProductCard />} />
					<Route path="user-card" element={<UserCard />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
