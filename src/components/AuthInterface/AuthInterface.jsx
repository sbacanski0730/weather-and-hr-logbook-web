import React from 'react';
import { Link as ReactLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeIcon from '@mui/icons-material/LightMode';

import CustomTopbarIconButton from '../styled-components/CustomTopbarIconButton.jsx';
import CustomTopbarButton from '../styled-components/CustomTopbarButton.jsx';

import { APP_ROUTES } from '../../utils/constants';

import { useTheme } from '../../contexts/ThemeContext.jsx';

const AuthInterface = () => {
    // const { themeMode, toggleTheme } = useContext(ThemeContext);
    const { pathname } = useLocation();
    const { themeMode, toggleTheme } = useTheme();

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'primary.main',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                py: '3px',
                px: 1,
            }}
        >
            <Stack direction="row" spacing={1}>
                <CustomTopbarIconButton
                    onClick={toggleTheme}
                    size="small"
                    sx={{
                        px: '1px',
                        py: '1px',
                    }}
                >
                    {themeMode === 'dark' ? (
                        <LightModeIcon data-testid="light-mode-icon" />
                    ) : (
                        <DarkModeSharpIcon data-testid="dark-mode-icon" />
                    )}
                </CustomTopbarIconButton>
                <CustomTopbarButton sx={{ my: '1px', mx: '2px' }}>
                    {pathname.includes('info') ? (
                        <Link
                            to={APP_ROUTES.LOGIN}
                            component={ReactLink}
                            sx={{ color: 'inherited' }}
                            underline="none"
                            data-testid="custom-login-link"
                        >
                            <Typography variant="h5">LOGIN</Typography>
                        </Link>
                    ) : (
                        <Link
                            to={APP_ROUTES.INFO}
                            component={ReactLink}
                            sx={{ color: 'inherited' }}
                            underline="none"
                            data-testid="custom-info-link"
                        >
                            <Typography variant="h5">INFO</Typography>
                        </Link>
                    )}
                </CustomTopbarButton>
            </Stack>
        </AppBar>
    );
};

export default AuthInterface;
