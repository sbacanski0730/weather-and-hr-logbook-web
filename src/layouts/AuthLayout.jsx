import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import AuthInterface from '../components/AuthInterface/AuthInterface.jsx';
import { AuthContextProvider } from '../contexts/AuthContext.jsx';

const AuthLayout = () => (
    <>
        <AuthContextProvider>
            <AuthInterface />
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
        </AuthContextProvider>
    </>
);

export default AuthLayout;
