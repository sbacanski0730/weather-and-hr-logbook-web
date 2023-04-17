import React, { useState, useEffect } from 'react';
import { useNavigate, Link as ReactLink } from 'react-router-dom';

import {
    styled,
    Container,
    Grid,
    Box,
    Paper,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material';

import { API_ROUTES } from '../utils/constants';
import { authenticateUserToken, isValidateRegister } from '../utils/authFunction';

const CustomTextField = styled(TextField)(({ theme }) => ({
    // do tego napisu nad inputem
    '& label': {
        '&.Mui-focused': {
            color: theme.palette.text.secondary,
        },
    },

    // kolor border static
    '& fieldset': {
        borderRadius: 0,
        borderColor: theme.palette.secondary.main,
    },

    // kolor border do :hover
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.secondary.dark,
    },

    // do bordera na focus
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderWidth: '1px',
        borderColor: theme.palette.secondary.dark,
    },
}));

const RegisterPage = () => {
    const navigate = useNavigate();
    const [infoContent, setInfoContent] = useState('');
    const [infoColor, setInfoColor] = useState('#8a0508');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    useEffect(() => {
        const authenticateForLoginPage = async () => {
            const { verify } = await authenticateUserToken();

            if (verify) {
                navigate('/');
            } else {
                localStorage.removeItem('token');
            }
        };
        authenticateForLoginPage();
    }, []);

    // TODO: move this function to auth context
    const handleRegister = async () => {
        try {
            if (isValidateRegister(email, password, repeatedPassword)) {
                const { status, message } = await fetch(API_ROUTES.REGISTER, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }).then((res) => res.json());

                // status ? setInfoColor('#32c809') : setInfoColor('#d20404');
                if (status) {
                    setInfoColor('#32c809');
                } else {
                    setInfoColor('#d20404');
                }

                setInfoContent(message);

                setPassword('');
                setRepeatedPassword('');

                setTimeout(() => {
                    setInfoContent('');
                }, 5000);
            }
        } catch (err) {
            setInfoContent(err);
            setTimeout(() => {
                setInfoContent('');
            }, 5000);
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
                        <Typography component="h1" variant="h1" sx={{ userSelect: 'none' }} noWrap>
                            Sign Up
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
                                label="Email Address"
                                type="text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                            <CustomTextField
                                required
                                fullWidth
                                margin="normal"
                                label="Password"
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <CustomTextField
                                required
                                fullWidth
                                margin="normal"
                                label="Repeat Password"
                                type="password"
                                onChange={(e) => {
                                    setRepeatedPassword(e.target.value);
                                }}
                            />
                            {infoContent && (
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        m: 0,
                                        px: 1,
                                        color: `${infoColor}`,
                                        boxShadow: 'none',
                                    }}
                                >
                                    {infoContent}
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
                                onClick={() => handleRegister()}
                            >
                                Register
                            </Button>
                            <Grid container sx={{ justifyContent: 'flex-end' }}>
                                <Grid item>
                                    <Link
                                        component={ReactLink}
                                        to="/login"
                                        variant="h5"
                                        underline="hover"
                                        color="authLinkColor.main"
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                        }}
                                    >
                                        Already have an account? Login
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Container>
    );
};

export default RegisterPage;
