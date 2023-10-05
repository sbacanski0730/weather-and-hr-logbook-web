import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropType from 'prop-types';
// import CustomButton from './CustomButton.jsx';

const AddEmployeeListElement = ({ report, setReport, userId, name, surname, position }) => {
    const [addedStatus, setAddedStatus] = useState(false);

    const onAdd = () => {
        // setReport({ ...report, employees: report.employees.push(userId) });

        console.log(report.employees);
        console.log(typeof report.employees);
        setAddedStatus(true);
    };

    const onRemove = () => {
        setReport({ ...report, employees: report.employees.filter((e) => e.toString() !== userId) });
        console.log(report.employees);
        setAddedStatus(false);
    };

    return (
        <>
            <Box
                sx={{
                    border: '1px solid transparent',
                    '&:hover': {
                        width: '100%',
                        borderColor: 'primary.dark',
                    },
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignContent: 'center',
                    my: 1,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '20px',
                        p: 1,
                    }}
                >
                    <Typography sx={{ userSelect: 'none' }}>{name} </Typography>
                    <Typography sx={{ userSelect: 'none' }}>{surname}</Typography>
                    <Typography sx={{ userSelect: 'none' }}>{position}</Typography>
                </Box>
                {addedStatus ? (
                    <Button variant="outline" onClick={onRemove}>
                        -
                    </Button>
                ) : (
                    <Button variant="outline" onClick={onAdd}>
                        +
                    </Button>
                )}
            </Box>
        </>
    );
};
export default AddEmployeeListElement;

AddEmployeeListElement.propTypes = {
    report: PropType.object,
    setReport: PropType.func,
    userId: PropType.string,
    name: PropType.string,
    surname: PropType.string,
    position: PropType.string,
};
