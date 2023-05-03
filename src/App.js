import { createContext, useState, useEffect } from 'react';
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material';
import HomePage from './pages/HomePage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import AddReportPage from './pages/AddReportPage.jsx';
import ReportPage from './pages/ReportPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import AuthLayout from './layouts/AuthLayout.jsx';

import { APP_ROUTES } from './utils/constants';

import createProjectTheme from './theme/createProjectTheme';
import InfoPage from './pages/InfoPage.jsx';
import ReportsListPage from './pages/ReportsListPage.jsx';
import Error404Page from './pages/Error404Page.jsx';

const routing = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<AuthLayout />}>
                <Route index exact path={APP_ROUTES.LOGIN} element={<LoginPage />} />
                <Route exact path={APP_ROUTES.REGISTER} element={<RegisterPage />} />
                <Route exact path={APP_ROUTES.INFO} element={<InfoPage />} />
            </Route>
            <Route element={<MainLayout />}>
                <Route exact path={APP_ROUTES.HOME} element={<HomePage />} />
                <Route exact path={APP_ROUTES.PROJECT_INFO} element={<InfoPage />} />
                <Route exact path={APP_ROUTES.ADD_REPORT} element={<AddReportPage />} />
                <Route exact path={APP_ROUTES.REPORT} element={<ReportPage />} />
                <Route exact path={APP_ROUTES.REPORTS} element={<ReportsListPage />} />
                <Route path={APP_ROUTES.ERROR} element={<Error404Page />} />
            </Route>
        </>
    )
);

export const ThemeContext = createContext();

const getTheme = () => localStorage.getItem('theme');

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
