import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CustomTextField from '../components/styled-components/CustomTextField.jsx';
import { AuthContext } from '../contexts/AuthContext.jsx';

const SetNewPasswordPage = () => {
    const { setNewPassword } = useContext(AuthContext);
    const [info, setInfo] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const validatePassword = () => {
        if (!password) throw Error('Password in needed');
        if (!repeatedPassword) throw Error('Password in needed');
        if (!password === repeatedPassword) throw Error('Those values have to be equal');
    };

    const { id, token } = useParams();

    const handlePasswordSet = async () => {
        try {
            validatePassword();
            const response = await setNewPassword(id, token, password);
            if (response.status) {
                console.log('password changed');
                setInfo('Password Changed');
            }
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
                            Set New Password
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
                                label="New Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <CustomTextField
                                required
                                fullWidth
                                margin="normal"
                                label="Repeat New Password"
                                type="password"
                                value={repeatedPassword}
                                onChange={(e) => setRepeatedPassword(e.target.value)}
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
                                onClick={handlePasswordSet}
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    color: 'customButtonAuthTextColors.primary',
                                    bgcolor: 'secondary.dark',
                                    boxShadow: 'none',
                                    '&:hover': { boxShadow: 'none' },
                                }}
                            >
                                Set Password
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Container>
    );
};

export default SetNewPasswordPage;
