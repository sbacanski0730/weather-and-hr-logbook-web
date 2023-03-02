import { useState, useMemo, createContext } from 'react';
import createProjectTheme from '../theme/createProjectTheme';

// export const ThemeContext = createContext({
// 	themeToggle: () => {},
// });

// export const useThemeMode = () => {
// 	const [mode, setMode] = useState('light');

// 	const themeChange = useMemo(() => {
// 		themeToggle: () => {
// 			if (mode === 'light') setMode('dark');
// 			if (mode === 'dark') setMode('light');
// 		};
// 	}, []);

// 	const activeTheme = useMemo(() => createProjectTheme(mode), [mode]);
// 	return [themeChange, activeTheme];
// };

// export const ThemeContext = createContext();

// export const ThemeContextProvider = ({ children }) => {
// 	return (
// 		<>
// 			<ThemeContext.Provider>{children}</ThemeContext.Provider>
// 		</>
// 	);
// };
