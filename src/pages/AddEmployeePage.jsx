import React, { useState, useContext } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { ReportContext } from '../contexts/ReportContext';
import CustomTextField from '../components/styled-components/CustomTextField.jsx';
import CustomButton from '../components/styled-components/CustomButton.jsx';

const AddEmployeePage = () => {
    const { addEmployee } = useContext(ReportContext);
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [position, setPosition] = useState('');

    const validateInputsValues = () => {
        if (!name) throw new Error('You need to set name!');

        if (!surname) throw new Error('You need to set surname!');

        if (!position) throw new Error('You need to set position!');
    };

    const handleAddEmployee = async () => {
        try {
            validateInputsValues();

            const response = await addEmployee({ name, surname, position });

            if (response.status) {
                setInfo(response.message);
                setName('');
                setSurname('');
                setPosition('');
                setTimeout(() => {
                    setInfo('');
                }, 3000);
            }
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    };

    return (
        <Paper elevation={10} sx={{ backgroundColor: 'primary.light' }}>
            <Container maxWidth="xl" sx={{ minWidth: '400px', p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h3">Employee data</Typography>

                <CustomTextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <CustomTextField
                    fullWidth
                    label="Surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                />
                <CustomTextField
                    fullWidth
                    label="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <Typography
                    variant="body3"
                    sx={{ fontWeight: '600', alignSelf: 'center', color: error ? 'red' : 'green' }}
                >
                    {error} {info}
                </Typography>
                <CustomButton variant="contained" onClick={() => handleAddEmployee()}>
                    Add Employee
                </CustomButton>
            </Container>
        </Paper>
    );
};

export default AddEmployeePage;
