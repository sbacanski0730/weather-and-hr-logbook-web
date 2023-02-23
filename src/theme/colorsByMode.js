const colorsByMode = mode => {
	return mode == 'light'
		? // light mode
		  {
				primary: {
					main: '#eaf6ff',
					light: '#f8fcff',
					dark: '#b9e1fe',
				},
				secondary: {
					main: '#b9e1fe',
					light: '#daeffe',
					dark: '#88ccff',
				},
				text: {
					primary: '#000910',
					secondary: '#001b30',
				},
				customButtonAuthTextColors: {
					primary: '#ffffff',
					secondary: '',
				},
				topbarHoverColor: {
					// main: '#004a82', TODO: choose color for light theme
				},
				authLinkColor: {
					main: '#004a82',
				},
				backdropBackgroundColor: 'rgba(0,0,0, 0.13)',
		  }
		: {
				primary: {
					main: '#002039',
					light: '#002e51',
					dark: '#001B30',
				},
				secondary: {
					main: '#002e51',
					light: '#003c6a',
					dark: '#001b30',
				},
				text: {
					primary: '#f2f9ff',
					secondary: '#e2f2fe',
				},
				customButtonAuthTextColors: {
					primary: '#ffffff',
					secondary: '',
				},
				topbarHoverColor: {
					main: '#004a82',
				},
				authLinkColor: {
					main: '#004a82',
				},
				backdropBackgroundColor: 'rgba(0,0,0, 0.13)',
		  };
};

export default colorsByMode;
