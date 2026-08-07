import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetails } from './pages/ProductDetails';
import { DashboardLayout } from './layouts/DashboardLayout';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { Profile } from './pages/dashboard/Profile';
import { Settings } from './pages/dashboard/Settings';
import { NotFound } from './pages/NotFound';
import { AppContext } from './context/AppContext';

function App() {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<AppContext.Provider value={{pathname}}>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/products' element={<Products />} />
					<Route path='/products/:productId' element={<ProductDetails />} />
					<Route path='/dashboard' element={<DashboardLayout />}>
						<Route index element={<DashboardHome />} />
						<Route path='profile' element={<Profile />} />
						<Route path='settings' element={<Settings />} />
					</Route>
					<Route path='*' element={<NotFound />} />
				</Route>			
			</Routes>
		</AppContext.Provider>
    )
}

export default App
