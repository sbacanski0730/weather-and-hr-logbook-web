/* eslint-disable arrow-body-style */
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
// import { useEffect, useState } from 'react';
// import { ThemeProvider } from '@mui/material';
import UserInterface from '../components/UserInterface/UserInterface.jsx';
import { ReportContextProvider } from '../contexts/ReportContext.jsx';
// import ThemeContext from '../contexts/ThemeContext.jsx';
// import createProjectTheme from '../theme/createProjectTheme';

// const getTheme = () => localStorage.getItem('theme');

const MainLayout = () => {
    // const [themeMode, setThemeMode] = useState(getTheme() || 'light');

    // const toggleTheme = () => {
    //     if (themeMode === 'light') setThemeMode('dark');
    //     if (themeMode === 'dark') setThemeMode('light');
    // };

    // useEffect(() => {
    //     localStorage.setItem('theme', themeMode);
    // }, [themeMode]);

    return (
        <>
            {/* <ThemeContext.Provider value={{ themeMode, toggleTheme }}> */}
            {/* <ThemeProvider theme={createProjectTheme(themeMode)}> */}
            <ReportContextProvider>
                <UserInterface />
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
            </ReportContextProvider>
            {/* </ThemeProvider> */}
            {/* </ThemeContext.Provider> */}
        </>
    );
};

export default MainLayout;
