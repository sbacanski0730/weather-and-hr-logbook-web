import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AuthInterface from './components/AuthInterface/AuthInterface.jsx';
import UserInterface from './components/UserInterface/UserInterface.jsx';

import { ThemeProvider, createTheme } from '@mui/material';
import { setThemeValues } from './theme/setThemeValues.js';

function App() {
	const activeTheme = createTheme(setThemeValues('dark'));

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

	return (
		<>
			<ThemeProvider theme={activeTheme}>
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
		</>
	);
}

const Root = () => {
	return (
		<>
			<UserInterface />
			<Outlet />
		</>
	);
};

const AuthRoot = () => {
	return (
		<>
			<AuthInterface />
			<Outlet />
		</>
	);
};

export default App;
