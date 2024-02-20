/* eslint-disable arrow-body-style */
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import UserInterface from '../components/UserInterface/UserInterface.jsx';
import { ReportContextProvider } from '../contexts/ReportContext.jsx';

const MainLayout = () => {
    return (
        <>
            <ReportContextProvider>
                <UserInterface />
                <Container
                    maxWidth={false}
                    sx={{
                        backgroundColor: 'secondary.light',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Outlet />
                </Container>
            </ReportContextProvider>
        </>
    );
};

export default MainLayout;
