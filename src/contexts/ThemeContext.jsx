import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContextNew = createContext();

// eslint-disable-next-line no-unused-vars, react/prop-types
export const ThemeProvider = ({ children }) => {
    const getTheme = () => localStorage.getItem('theme');
    const [themeMode, setThemeMode] = useState(getTheme() || 'light');

    const toggleTheme = () => {
        if (themeMode === 'light') setThemeMode('dark');
        if (themeMode === 'dark') setThemeMode('light');
    };

    useEffect(() => {
        const mode = localStorage.getItem('theme');
        if (mode) {
            if (mode.match(/light/i) || mode.match(/dark/i)) setThemeMode(mode.toLowerCase());
        } else {
            setThemeMode('light');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', themeMode);
    }, [themeMode]);

    return (
        <>
            <ThemeContextNew.Provider value={{ themeMode, toggleTheme }}>{children}</ThemeContextNew.Provider>
        </>
    );
};

export default ThemeContextNew;

export const useTheme = () => {
    const theme = useContext(ThemeContextNew);
    if (!theme) throw Error('useTheme need to be used inside ThemeContextNew');
    return theme;
};
