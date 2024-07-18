import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Loader from '../Loader/Loader.jsx';
import Navbar from '../NavBar/NavBar.jsx';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog.jsx'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites.jsx'));

function App() {
	return (
		<>
			<Suspense fallback={<Loader />}>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
