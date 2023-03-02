import { createContext, useState, useEffect } from 'react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Root from './layouts/Root';
import AuthRoot from './layouts/AuthRoot';

import { ThemeProvider } from '@mui/material';
import createProjectTheme from './theme/createProjectTheme.js';

const routing = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<AuthRoot />}>
				<Route index path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
			</Route>
			<Route element={<Root />}>
				<Route path='/' element={<HomePage />} />
			</Route>
		</>
	)
);

export const ThemeContext = createContext();

const getTheme = () => {
	return localStorage.getItem('theme');
};

function App() {
	const [themeMode, setThemeMode] = useState(getTheme());

	const toggleTheme = () => {
		if (themeMode === 'light') setThemeMode('dark');
		if (themeMode === 'dark') setThemeMode('light');
	};

	useEffect(() => {
		localStorage.setItem('theme', themeMode);
	}, [themeMode]);

	return (
		<>
			<ThemeContext.Provider value={{ themeMode, toggleTheme }}>
				<ThemeProvider theme={createProjectTheme(themeMode)}>
					<CssBaseline />
					{/* <Container
					maxWidth={false}
					sx={{
						width: '100vw',
						height: '100vh',
					}}
				> */}
					<RouterProvider router={routing} />

					{/* </Container> */}
				</ThemeProvider>
			</ThemeContext.Provider>
		</>
	);
}

export default App;
