import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

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
		</>
	);
}

export default App;
