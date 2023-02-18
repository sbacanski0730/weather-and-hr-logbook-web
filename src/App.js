import {
	BrowserRouter,
	Routes,
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Outlet,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar/Navbar';
// import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { setTheme } from './utils/settingThemeValues.js';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	const activeTheme = setTheme('light');

	// https://www.youtube.com/watch?v=z0vaVoxMoSA
	const authRouting = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root navbar={false} />}>
				<Route index path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
			</Route>
		)
	);
	const normalRouting = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<Root navbar={true} />}>
				{/* <Route index path='/' element={<LoginPage />} /> */}
			</Route>
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
				<RouterProvider router={authRouting} />
				<RouterProvider router={normalRouting} />
				{/* <BrowserRouter>
						<Routes>
							<Route path='/login' exact element={<LoginPage />} />
							<Route path='/register' exact element={<RegisterPage />} />
						</Routes>
					</BrowserRouter>

					<BrowserRouter>
						<Navbar />
						<Routes></Routes>
					</BrowserRouter> */}
				{/* </Container> */}
			</ThemeProvider>
		</>
	);
}

const Root = ({ navbar }) => {
	return (
		<>
			{navbar ? <Navbar /> : null}
			{navbar ? <Sidebar /> : null}
			<Outlet />
		</>
	);
};

export default App;
