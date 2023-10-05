import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import CustomTextField from '../components/styled-components/CustomTextField.jsx';
import { AuthContext } from '../contexts/AuthContext.jsx';

const ResetPasswordPage = () => {
    const [info, setInfo] = useState('');
    const [email, setEmail] = useState('');
    const [repeatedEmail, setRepeatedEmail] = useState('');
    const { passwordReset } = useContext(AuthContext);

    const validateEmails = () => {
        if (!email) throw new Error('Email has to be provided');
        if (
            !String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        )
            throw new Error('Provide a valid email');
        if (!repeatedEmail) throw new Error('You have to repeat email');
        if (
            !String(repeatedEmail)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        )
            throw new Error('Provide a valid repeated email');
        if (!email === repeatedEmail) throw new Error('Emails have to be the same');
    };

    const handlePasswordReset = async () => {
        try {
            validateEmails();
            const response = await passwordReset({ email });
            if (response.status) setInfo('Email Sended');
        } catch (err) {
            setInfo(err.message);
            setTimeout(() => setInfo(''), 3500);
        }
    };

    return (
        <Container
            maxWidth={false}
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'secondary.light',
            }}
        >
            <Container maxWidth="xs">
                <Paper
                    elevation={10}
                    sx={{
                        px: 3,
                        py: 3,
                        borderRadius: 0,
                        bgcolor: 'primary.light',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant="h3" sx={{ userSelect: 'none' }} noWrap>
                            Reset Password
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                mt: 1,
                            }}
                        >
                            <CustomTextField
                                required
                                fullWidth
                                margin="normal"
                                label="Email "
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <CustomTextField
                                required
                                fullWidth
                                margin="normal"
                                label="Repeat Email"
                                type="text"
                                value={repeatedEmail}
                                onChange={(e) => setRepeatedEmail(e.target.value)}
                            />
                            {info && (
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        m: 0,
                                        px: 1,
                                        color: '#ff0000',
                                        boxShadow: 'none',
                                    }}
                                >
                                    {info}
                                </Typography>
                            )}
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    color: 'customButtonAuthTextColors.primary',
                                    bgcolor: 'secondary.dark',
                                    boxShadow: 'none',
                                    '&:hover': { boxShadow: 'none' },
                                }}
                                onClick={handlePasswordReset}
                            >
                                Reset Password
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Container>
    );
};

export default ResetPasswordPage;
