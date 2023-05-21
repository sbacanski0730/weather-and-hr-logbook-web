import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { ReportContext } from '../contexts/ReportContext';
import CustomButton from '../components/styled-components/CustomButton.jsx';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
import DeleteEmployeePopup from '../components/DeleteEmployeePopup.jsx';

const ShowEmployeesPage = () => {
    const { fetchEmployees, userEmployees, deleteEmployee } = useContext(ReportContext);
    const navigate = useNavigate();
    const [trigger, setTrigger] = useState(false);
    const [reportIdToDelete, setReportIdToDelete] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const columns = [
        { id: 'name', label: 'Name', minWidth: '80px', align: 'right' },
        { id: 'surname', label: 'Surname', minWidth: '80px', align: 'right' },
        { id: 'position', label: 'Position', minWidth: '80px', align: 'right' },
        { id: 'delete', label: '', minWidth: '20px', align: 'right' },
    ];

    const rows = userEmployees.map((e) => ({
        employeeId: e._id,
        name: e.name,
        surname: e.surname,
        position: e.position,
    }));

    if (userEmployees.length === 0) {
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
                    <p>User doesn&apos;t have any employees</p>
                    <CustomButton
                        variant="contained"
                        sx={{ width: '100%' }}
                        onClick={() => navigate(APP_ROUTES.ADD_EMPLOYEE)}
                    >
                        Add Employee
                    </CustomButton>
                </Container>
            </>
        );
    }

    const handleDelete = async (reportId) => {
        const { status } = await deleteEmployee(reportId);
        if (status) await fetchEmployees();
        setTrigger(false);
    };

    return (
        <>
            <Container maxWidth="xl">
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader>
                        <TableHead sx={{ border: '2px dotted orange', backgroundColor: 'red' }}>
                            <TableRow>
                                {columns.map((column, index) => (
                                    <TableCell
                                        key={index}
                                        align="center"
                                        sx={{
                                            backgroundColor: 'primary.dark',
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {rows.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell sx={{ maxWidth: '300px' }} align="center">
                                        {row.name}
                                    </TableCell>
                                    <TableCell sx={{ maxWidth: '300px' }} align="center">
                                        {row.surname}
                                    </TableCell>
                                    <TableCell sx={{ maxWidth: '300px' }} align="center">
                                        {row.position}
                                    </TableCell>
                                    <TableCell sx={{ maxWidth: '300px' }} align="center">
                                        <p
                                            onClick={() => {
                                                setTrigger(true);
                                                setReportIdToDelete(row.employeeId);
                                            }}
                                        >
                                            Usuń
                                        </p>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                    <CustomButton onClick={() => navigate(APP_ROUTES.ADD_EMPLOYEE)} variant="contained">
                        Add Employee
                    </CustomButton>
                </Box>
            </Container>
            <DeleteEmployeePopup
                trigger={trigger}
                setTrigger={setTrigger}
                handleDelete={handleDelete}
                reportId={reportIdToDelete}
            />
        </>
    );
};

export default ShowEmployeesPage;
