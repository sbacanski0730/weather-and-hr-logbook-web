import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import { setTheme } from './utils/settingThemeValues.js';
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import UserInterface from './components/UserInterface/UserInterface.jsx';

function App() {
	const activeTheme = setTheme('light');

	const routing = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route element={<Root navbar={false} />}>
					<Route index path='/login' element={<LoginPage />} />
					<Route path='/register' element={<RegisterPage />} />
				</Route>
				<Route element={<Root navbar={true} />}>
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

const Root = ({ navbar }) => {
	return (
		<>
			{navbar ? <UserInterface /> : null}
			<Outlet />
		</>
	);
};

export default App;
