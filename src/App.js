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
import AddReportPage from './pages/AddReportPage.jsx';
import Root from './layouts/Root';
import AuthRoot from './layouts/AuthRoot';

import { APP_ROUTES } from './utils/constants.js';

import { ThemeProvider } from '@mui/material';
import createProjectTheme from './theme/createProjectTheme.js';
import InfoPage from './pages/InfoPage.jsx';

const routing = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route element={<AuthRoot />}>
				<Route index path={APP_ROUTES.LOGIN} element={<LoginPage />} />
				<Route path={APP_ROUTES.REGISTER} element={<RegisterPage />} />
				<Route path={APP_ROUTES.INFO} element={<InfoPage />} />
			</Route>
			<Route element={<Root />}>
				<Route path={APP_ROUTES.HOME} element={<HomePage />} />
				<Route path={APP_ROUTES.PROJECT_INFO} element={<InfoPage />} />
				<Route path={APP_ROUTES.ADD_REPORT} element={<AddReportPage />} />
			</Route>
		</>
	)
);

export const ThemeContext = createContext();

const getTheme = () => {
	return localStorage.getItem('theme');
};

function App() {
	const [themeMode, setThemeMode] = useState(getTheme() || 'light');

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
					<RouterProvider router={routing} />
				</ThemeProvider>
			</ThemeContext.Provider>
		</>
	);
}

export default App;
