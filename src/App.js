import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { setTheme } from './utils/settingThemeValues.js';

function App() {
	const activeTheme = setTheme('light');

	return (
		<>
			<ThemeProvider theme={activeTheme}>
				<CssBaseline />
				<Container
					maxWidth={false}
					sx={{
						width: '100vw',
						height: '100vh',
					}}
				>
					<BrowserRouter>
						<Routes>
							<Route path='/login' exact element={<LoginPage />} />
							<Route path='/register' exact element={<RegisterPage />} />
						</Routes>
					</BrowserRouter>
					<BrowserRouter>
						<Navbar />
					</BrowserRouter>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;
