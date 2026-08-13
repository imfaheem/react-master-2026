import { Routes, Route } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'

import { DeleteOperation } from './pages/DeleteOperation'
import { GetOperation } from './pages/GetOperation'
import { PatchOperation } from './pages/PatchOperation'
import { PostOperation } from './pages/PostOperation'
import { PutOperation } from './pages/PutOperation'

import './App.css'

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

export default App;
