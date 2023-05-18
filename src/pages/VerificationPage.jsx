import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CircularProgress, Grow } from '@mui/material';
import CustomButton from '../components/styled-components/CustomButton.jsx';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';

const VerificationPage = () => {
    const navigate = useNavigate();
    const { id: userId, token } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [info, setInfo] = useState('');

    const sendEmailAgain = async () => {
        const response = await fetch(API_ROUTES.SEND_EMAIL_AGAIN.replace(':id', userId).replace(':token', token)).then(
            (res) => res.json()
        );

        if (response.status) {
            setInfo(response.message);
            setTimeout(() => {
                setInfo('');
                navigate(APP_ROUTES.LOGIN);
            }, 5000);
        }
    };

    useEffect(() => {
        const verifyEmail = async () => {
            if (!isVerified) {
                setIsLoading(true);
                const response = await fetch(
                    API_ROUTES.EMAIL_VERIFICATION.replace(':id', userId).replace(':token', token)
                ).then((res) => res.json());

                if (response.status) {
                    setIsVerified(true);
                    setIsLoading(false);
                }

                if (!response.status) {
                    setIsVerified(false);
                    setIsLoading(false);
                }
            }
        };

        verifyEmail();
    }, []);

    if (isLoading)
        return (
            <>
                <Grow in={isLoading} easing="ease-out" timeout={2000} appear={true}>
                    <CircularProgress sx={{ color: 'secondary.dark' }} size="52px" />
                </Grow>
            </>
        );

    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',

                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '28px',
                }}
            >
                {isVerified ? (
                    <>
                        <p>Email Verified Successfully!!</p>
                        <CustomButton
                            variant="contained"
                            sx={{ width: '100%' }}
                            onClick={() => navigate(APP_ROUTES.LOGIN)}
                        >
                            Login
                        </CustomButton>
                    </>
                ) : (
                    <>
                        <p>Problem With Verification</p>
                        <CustomButton variant="contained" sx={{ width: '100%' }} onClick={() => sendEmailAgain()}>
                            Send Email Again
                        </CustomButton>
                    </>
                )}
            </Container>
            {info && (
                <Typography variant="subtitle1" sx={{ fontWeight: '600', fontSize: '20px', color: 'green' }}>
                    {info}
                </Typography>
            )}
        </>
    );
};

export default VerificationPage;
