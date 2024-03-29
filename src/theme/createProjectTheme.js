import { createTheme } from '@mui/material';
import colorsByMode from './colorsByMode';

const setThemeValues = (mode) => {
    const colors = colorsByMode(mode);

    return {
        palette: {
            mode,
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
                fontSize: '1.5rem',
            },
            h5: {
                fontSize: '1rem',
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
                fontSize: '1.2rem',
            },
        },
    };
};

const createProjectTheme = (mode) => createTheme(setThemeValues(mode));

export default createProjectTheme;
