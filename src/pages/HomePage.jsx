import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { APP_ROUTES } from '../utils/constants';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate(APP_ROUTES.LOGIN);
        }
    });

    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '10px',
                }}
            >
                <Button
                    sx={{ width: '100%' }}
                    variant="contained"
                    onClick={() => navigate(APP_ROUTES.REPORTS)}
                >
                    Reports
                </Button>
                <Button
                    sx={{ width: '100%' }}
                    variant="contained"
                    onClick={() => navigate(APP_ROUTES.ADD_REPORT)}
                >
                    Add Report
                </Button>
                <Button
                    sx={{ width: '100%' }}
                    variant="contained"
                    onClick={() => navigate(APP_ROUTES.CALENDAR)}
                >
                    Calendar
                </Button>
                <Button
                    sx={{ width: '100%' }}
                    variant="contained"
                    onClick={() => navigate(APP_ROUTES.EMPLOYEES)}
                >
                    Employees
                </Button>
                <Button
                    sx={{ width: '100%' }}
                    variant="contained"
                    onClick={() => navigate(APP_ROUTES.PROJECT_INFO)}
                >
                    Project Info
                </Button>
            </Container>
        </>
    );
};

export default Home;
