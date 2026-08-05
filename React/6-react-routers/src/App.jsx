import './App.css';
import { AppLayout } from './layouts/AppLayout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Profile } from './pages/dashboard/Profile';
import { Settings } from './pages/dashboard/Settings';
import { Projects } from './pages/dashboard/Projects';
import { DashboardHome } from './pages/dashboard/DashboardHome';
import { Team } from './pages/dashboard/Team';
import { Products } from './pages/products/Products';
import { ProductsDetails } from './pages/products/ProductsDetails';
import { ProductPosts } from './pages/products/ProductPosts';
import { Posts } from './pages/Posts';
import { NewProduct } from './pages/products/NewProduct';

function App() {
    return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/dashboard' element={<DashboardLayout />}>
					<Route index element={<DashboardHome />} />
					<Route path='profile' element={<Profile />} />
					<Route path='settings' element={<Settings />} />
					<Route path='projects' element={<Projects />} />
					<Route path='team' element={<Team />} />
				</Route>
				<Route path='/products' element={<Products />} />
				<Route path='/products/:productId' element={<ProductsDetails />} />
				<Route path='/products/:productId/posts/:postId' element={<ProductPosts />} />
				<Route path='/new-products' element={<NewProduct />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/contact' element={<Contact />} />
			</Route>			
		</Routes>
    )
}

export default App
