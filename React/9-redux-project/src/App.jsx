import { Routes, Route } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'

import { TraditionalRedux } from './pages/TraditionalRedux'
import { ReduxToolkit } from './pages/ReduxToolkit'
import { ReduxProject } from './pages/ReduxProject'

import './App.css'

function App() {  
    return (
      	<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route index element={<TraditionalRedux />} />
				<Route path="toolkit" element={<ReduxToolkit />} />
				<Route path='project'  element={<ReduxProject />} />
			</Route>
		</Routes>
    )
}

export default App
