import './App.css';
import { AxiosComp } from './components/AxiosComp';
import { Users } from './components/Users';

function App() {

	return (
		<div className='main-class'>
			<h1 className='text-center'>Data Fetching</h1>
			<div className='flex gap-4'>
				<Users />
				<AxiosComp />
			</div>
		</div>
	)
}

export default App
