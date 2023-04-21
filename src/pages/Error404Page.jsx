import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Error404Page = () => (
    <>
        <Container maxWidth="md" sx={{ backgroundColor: 'secondary.light' }}>
            <Paper
                square
                elevation={10}
                sx={{
                    p: 2,
                    transition: 'all 0.4s ease',
                    '&:hover': { transform: 'scale(101%)' },
                }}
            >
                <Typography variant="h1" sx={{ textAlign: 'center' }}>
                    ERROR
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', p: 4 }}>
                    Your are trying to access page which probably does&apos;t exist.
                    <br />
                    Please check your spelling.
                </Typography>
            </Paper>
        </Container>
    </>
);

export default Error404Page;
