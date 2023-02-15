import colorsByMode from './colorsByMode.js';
import { createTheme } from '@mui/material';

export const settingThemeValues = mode => {
	const colors = colorsByMode(mode);

	return {
		typography: {
			// fontFamily: "'Montserrat', sans-serif",
			fontSize: 14,
			h1: {
				fontFamily: "'Montserrat', sans-serif",
				fontSize: '4rem',
			},
			h2: {
				// fontFamily: "'Montserrat', sans-serif",
				fontSize: '3rem',
			},
			h3: {
				// fontFamily: "'Montserrat', sans-serif",
				fontSize: '2rem',
			},
			h4: {
				fontFamily: "'Montserrat', sans-serif",
				fontSize: '1rem',
			},
			h5: {
				fontFamily: "'Montserrat', sans-serif",
				fontSize: '0.81rem',
			},
			subtitle1: {
				// fontFamily: "'Montserrat', sans-serif",
				fontSize: '1rem',
			},
			subtitle2: {
				// fontFamily: "'Montserrat', sans-serif",
				fontSize: '1rem',
			},
			body1: {
				fontFamily: "'Montserrat', sans-serif",
				fontSize: '0.9rem',
			},
			body2: {
				// fontFamily: "'Montserrat', sans-serif",
				fontSize: '1rem',
			},
			button: {
				// fontFamily: "'Montserrat', sans-serif",
				fontSize: '1rem',
			},
		},
	};
};

export const setTheme = mode => {
	return createTheme(settingThemeValues(mode));
};

// ...(mode === 'dark'
// 	? {
// 			primary: {
// 				main: '',
// 			},
// 			secondary: {
// 				main: '',
// 			},
// 			error: {
// 				main: '',
// 			},
// 			text: {
// 				primary: '',
// 				secondary: '',
// 				disable: '',
// 			},
// 			background: {
// 				default: '',
// 				paper: '',
// 			},
// 	  }
// 	: {
// primary: {
// 	// main color for background
// 	main: '',
// },
// secondary: {
// 	main: '',
// },
// error: {
// 	main: '',
// },
// text: {
// 	primary: '',
// 	secondary: '',
// 	disable: '',
// },
// background: {
// 	default: '',
// 	paper: '',
// },
//   }),
