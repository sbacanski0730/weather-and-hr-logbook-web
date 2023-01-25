import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	return (
		<>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path='/login' exact element={<LoginPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
