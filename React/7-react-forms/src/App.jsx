import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { FormHook } from './pages/FormHook'
import { FormHookPractice } from './pages/FormHookPractice'
import { FormHookExercise } from './pages/FormHookExercise'
import { Dashboard } from './pages/Dashboard'
import { StylesLayout } from './layouts/StylesLayout'
import { ProductCard } from './components/product-card/ProductCard'
import { UserCard } from './components/dashboard/UserCard'
import { AnalyticsChart } from './components/dashboard/AnalyticsChart'
import { ProductTable } from './components/dashboard/ProductTable'
import { StatsCard } from './components/dashboard/StatsCard'
import { Settings } from './components/dashboard/Settings'

function App() {
  
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' end element={<FormHook />} />
				<Route path='form-hook/practice' end element={<FormHookPractice />} />
				<Route path='form-hook/exercise' end element={<FormHookExercise />} />
				<Route path='css-styles' element={<StylesLayout />}>
					<Route index element={<Navigate to="product-card" replace />} />
					<Route path='product-card' element={<ProductCard />} />
					<Route path="user-card" element={<UserCard />} />
				</Route>
				<Route path='tailwind-dashboard' element={<Dashboard />}>
					<Route index element={<Dashboard />} />
					<Route path="products" element={<ProductTable />} />
					<Route path="analytics" element={<AnalyticsChart />} />
					<Route path="statsistics" element={<StatsCard />} />
					<Route path="users" element={<UserCard />} />
					<Route path="settings" element={<Settings />} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
