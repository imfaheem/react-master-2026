import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { GetOperation } from './pages/GetOperation'
import { PostOperation } from './pages/PostOperation'
import { PutOperation } from './pages/PutOperation'
import { PatchOperation } from './pages/PatchOperation'
import { DeleteOperation } from './pages/DeleteOperation'

function App() {
  
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path="/" element={<GetOperation />} />
				<Route path="post" element={<PostOperation />} />
				<Route path="put" element={<PutOperation />} />
				<Route path="patch" element={<PatchOperation />} />
				<Route path="delete" element={<DeleteOperation />} />
			</Route>
		</Routes>
	)
}

export default App
