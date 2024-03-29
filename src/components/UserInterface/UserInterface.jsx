import React, { useState, useContext } from 'react';
import { Link as ReactLink, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';
import FolderIcon from '@mui/icons-material/Folder';
import AddIcon from '@mui/icons-material/Add';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import { APP_ROUTES } from '../../utils/constants';
import CustomColoredSidebarDrawer from '../styled-components/CustomColoredSidebarDrawer.jsx';
import CustomSidebarListItem from '../styled-components/CustomSidebarListItem.jsx';
import CustomTopbarIconButton from '../styled-components/CustomTopbarIconButton.jsx';
import CustomTopbarButton from '../styled-components/CustomTopbarButton.jsx';
import ThemeContextNew from '../../contexts/ThemeContext.jsx';

const UserInterface = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const { themeMode, toggleTheme } = useContext(ThemeContextNew);

    const logout = () => {
        localStorage.removeItem('token');
        navigate(APP_ROUTES.LOGIN);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'primary.main',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        mx: 1,
                        my: '4px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <CustomTopbarIconButton
                            size="24px"
                            sx={{
                                mr: 3,
                            }}
                            onClick={() => {
                                setIsOpen(true);
                            }}
                        >
                            <MenuIcon />
                        </CustomTopbarIconButton>
                        <Typography variant="h4" color="text.primary" sx={{ userSelect: 'none' }}>
                            WH-Logbook
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={1}>
                        <CustomTopbarIconButton onClick={toggleTheme}>
                            {themeMode === 'dark' ? <LightModeIcon /> : <DarkModeSharpIcon />}
                        </CustomTopbarIconButton>

                        <CustomTopbarButton
                            variant="outlined"
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                borderRadius: '40px',
                            }}
                            onClick={logout}
                        >
                            <LogoutIcon />
                            <Typography>Logout</Typography>
                        </CustomTopbarButton>
                    </Stack>
                </Box>
            </AppBar>
            {/* Sidebar */}
            <CustomColoredSidebarDrawer
                anchor="left"
                open={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
                PaperProps={{
                    elevation: 12,
                }}
                SlideProps={{
                    sx: {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                <Box>
                    <List>
                        {[
                            {
                                name: 'Reports',
                                icon: <FolderIcon sx={{ fontSize: '30px' }} />,
                                path: APP_ROUTES.REPORTS,
                            },
                            {
                                name: 'Add Report',
                                icon: <AddIcon sx={{ fontSize: '30px' }} />,
                                path: APP_ROUTES.ADD_REPORT,
                            },
                            {
                                name: 'Project info',
                                icon: <QuestionMarkIcon sx={{ fontSize: '30px' }} />,
                                path: '/project-info',
                            },
                        ].map(({ name, icon, path }, index) => (
                            <React.Fragment key={index}>
                                <CustomSidebarListItem disablePadding>
                                    <ListItemButton
                                        divider={true}
                                        onClick={() => {
                                            setIsOpen(false);
                                        }}
                                    >
                                        <Link to={path} component={ReactLink} underline="none" sx={{ display: 'flex' }}>
                                            <ListItemIcon
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                data-testid={name}
                                                primary={name}
                                                primaryTypographyProps={{
                                                    fontSize: '22px',
                                                }}
                                            />
                                        </Link>
                                    </ListItemButton>
                                </CustomSidebarListItem>
                            </React.Fragment>
                        ))}
                    </List>
                </Box>
            </CustomColoredSidebarDrawer>
        </>
    );
};

export default UserInterface;
