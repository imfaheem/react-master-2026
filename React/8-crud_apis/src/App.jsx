import { Routes, Route } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'

import { DeleteOperation } from './pages/DeleteOperation'
import { GetOperation } from './pages/GetOperation'
import { PatchOperation } from './pages/PatchOperation'
import { PostOperation } from './pages/PostOperation'
import { PutOperation } from './pages/PutOperation'
import { LoginPage } from './pages/LoginPage'

import './App.css'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  
	return (
		<Routes>
			{/* Protected Routes */}
			<Route element={<ProtectedRoute />}>
				<Route element={<AppLayout />}>
					<Route path="/" element={<GetOperation />} />
					<Route path="post" element={<PostOperation />} />
					<Route path="put/:productId" element={<PutOperation />} />
					<Route path="patch" element={<PatchOperation />} />
					<Route path="delete" element={<DeleteOperation />} />
				</Route>
			</Route>
			{/* Protected Route(s) */}
			<Route path='login' element={<LoginPage />} />
		</Routes>
	)
}

export default App;
