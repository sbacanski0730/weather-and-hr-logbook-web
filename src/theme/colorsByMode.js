const colorsByMode = mode => {
	return mode == 'light'
		? {
				primary: {
					main: '#eaf6ff',
					light: '#f8fcff',
					dark: '#b9e1fe',
				},
				secondary: {
					main: '#b9e1fe',
					light: '#daeffe',
					dark: '#88ccff',
					contrastText: '#004a82',
				},
				success: {
					main: '#4caf50',
					light: '#2e7d32',
					dark: '#1b5e20',
				},
				text: {
					primary: '#000910',
					secondary: '#001b30',
				},
				customButtonAuthTextColors: {
					primary: '#ffffff',
					secondary: '',
				},
				authLinkColor: {
					main: '#004a82',
				},
		  }
		: {
				primary: {
					main: '#42a5f5',
					light: '#1976d2',
					dark: '#1565c0',
				},
				secondary: {
					main: '#ba68c8',
					light: '#9c27b0',
					dark: '#7b1fa2',
				},
				success: {
					main: '#4caf50',
					light: '#2e7d32',
					dark: '#1b5e20',
				},
				text: {
					primary: '#0ff',
					secondary: '#f00',
				},
				customTextColors: {
					primary: '#ff0000',
					secondary: '',
				},
		  };
};

// const colorsByMode = mode => {
// 	mode == 'light'
// 		? {
// 				primary: {
// 					main: '#42a5f5',
// 					light: '#1976d2',
// 					dark: '#1565c0',
// 				},
// 				secondary: {
// 					main: '#ba68c8',
// 					light: '#9c27b0',
// 					dark: '#7b1fa2',
// 				},
// 				error: {
// 					main: '#ef5350',
// 					light: '#d32f2f',
// 					dark: '#c62828',
// 				},
// 				warning: {
// 					main: '#ff9800',
// 					light: '#ed6c02',
// 					dark: '#e65100',
// 					contrastText: '',
// 				},
// 				success: {
// 					main: '#4caf50',
// 					light: '#2e7d32',
// 					dark: '#1b5e20',
// 				},
// 				text: {
// 					primary: '#0f0',
// 					secondary: '#f00',
// 				},
// 				customTextColors: {
// 					primary: '#ff0000',
// 					secondary: '',
// 				},
// 		  }
// 		: {
// 				primary: {
// 					main: '#42a5f5',
// 					light: '#1976d2',
// 					dark: '#1565c0',
// 				},
// 				secondary: {
// 					main: '#ba68c8',
// 					light: '#9c27b0',
// 					dark: '#7b1fa2',
// 				},
// 				error: {
// 					main: '#ef5350',
// 					light: '#d32f2f',
// 					dark: '#c62828',
// 				},
// 				warning: {
// 					main: '#ff9800',
// 					light: '#ed6c02',
// 					dark: '#e65100',
// 					contrastText: '',
// 				},
// 				success: {
// 					main: '#4caf50',
// 					light: '#2e7d32',
// 					dark: '#1b5e20',
// 				},
// 				text: {
// 					// primary: '#ff0000',
// 				},
// 				customTextColors: {
// 					// primary: '#00ffff',
// 					secondary: '',
// 				},
// 		  };
// };
// if (mode == 'dark') {
// 	return {
// 		primary: {
// 			main: '#42a5f5',
// 			light: '#1976d2',
// 			dark: '#1565c0',
// 		},
// 		secondary: {
// 			main: '#ba68c8',
// 			light: '#9c27b0',
// 			dark: '#7b1fa2',
// 		},
// 		error: {
// 			main: '#ef5350',
// 			light: '#d32f2f',
// 			dark: '#c62828',
// 		},
// 		warning: {
// 			main: '#ff9800',
// 			light: '#ed6c02',
// 			dark: '#e65100',
// 			contrastText: '',
// 		},
// 		success: {
// 			main: '#4caf50',
// 			light: '#2e7d32',
// 			dark: '#1b5e20',
// 		},
// 		text: {
// 			// primary: '#ff0000',
// 		},
// 		customTextColors: {
// 			// primary: '#00ffff',
// 			secondary: '',
// 		},
// 	};
// }

export default colorsByMode;
