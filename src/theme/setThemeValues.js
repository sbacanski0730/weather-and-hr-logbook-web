import { createTheme } from '@mui/system';
import colorsByMode from './colorsByMode.js';

export const setThemeValues = mode => {
	const colors = colorsByMode(mode);

	return {
		palette: {
			mode: mode,
			...colors,
		},
		typography: {
			fontFamily: "'Montserrat', sans-serif",
			fontSize: 16,
			h1: {
				// fontFamily: "'Montserrat', sans-serif",
				fontSize: '4rem',
			},
			h2: {
				fontSize: '3rem',
			},
			h3: {
				fontSize: '2rem',
			},
			h4: {
				fontSize: '1rem',
			},
			h5: {
				fontSize: '0.90rem',
			},
			subtitle1: {
				fontSize: '1rem',
			},
			subtitle2: {
				fontSize: '1rem',
			},
			body1: {
				fontSize: '0.9rem',
			},
			body2: {
				fontSize: '1rem',
			},
			button: {
				fontSize: '1.25rem',
			},
		},
	};
};
