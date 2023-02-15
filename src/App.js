import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path='/login' exact element={<LoginPage />} />
					<Route path='/register' exact element={<RegisterPage />} />
				</Routes>
			</BrowserRouter>

			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		</>
	);
}

export default App;
