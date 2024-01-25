/* eslint-disable arrow-body-style */
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
// import { useEffect, useState } from 'react';
// import { ThemeProvider } from '@mui/material';
import AuthInterface from '../components/AuthInterface/AuthInterface.jsx';
// import ThemeContextNew from '../contexts/ThemeContext.jsx';
// import createProjectTheme from '../theme/createProjectTheme';

// const getTheme = () => localStorage.getItem('theme');

const AuthLayout = () => {
    // const [themeMode, setThemeMode] = useState(getTheme() || 'light');

    // const toggleTheme = () => {
    //     if (themeMode === 'light') setThemeMode('dark');
    //     if (themeMode === 'dark') setThemeMode('light');
    //     console.log('Toggle Clicked');
    // };

    // useEffect(() => {
    //     localStorage.setItem('theme', themeMode);
    // }, [themeMode]);

    return (
        <>
            {/* <ThemeContextNew.Provider value={{ themeMode, toggleTheme }}> */}
            {/* <ThemeProvider theme={createProjectTheme(themeMode)}> */}
            <AuthInterface />
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: 'secondary.light',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Outlet />
            </Container>
            {/* </ThemeProvider> */}
            {/* </ThemeContextNew.Provider> */}
        </>
    );
};

export default AuthLayout;
