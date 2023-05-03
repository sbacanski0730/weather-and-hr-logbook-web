import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import CircularProgress from '@mui/material/CircularProgress';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';
import ShowReportButton from '../components/ShowReportButton/ShowReportButton.jsx';
import CustomButton from '../components/styled-components/CustomButton.jsx';

const ReportsListPage = () => {
    const navigate = useNavigate();

    const [userReports, setUserReports] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchReports = async () => {
        setIsLoading(true);
        const response = await fetch(API_ROUTES.REPORTS, {
            headers: {
                method: 'post',
                'content-type': 'application/json',
                token: localStorage.getItem('token'),
            },
        })
            .then((res) => res.json())
            .catch((e) => console.log(e));
        // setIsLoading(false);
        setUserReports(response.content);
        console.log(response);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    };

    useEffect(() => {
        fetchReports();
    }, []);

    const columns = [
        { id: 'date', label: 'Date', minWidth: 80, align: 'right' },
        { id: 'title', label: 'Title', minWidth: 80, align: 'right' },
        { id: 'skyStatus', label: 'Sky Status', minWidth: 80, align: 'right' },
        { id: 'shipStatus', label: 'Ship Status', minWidth: 80, align: 'right' },
        { id: 'windSpeed', label: 'Wind Speed', minWidth: 80, align: 'right' },
        { id: 'showElement', label: '', minWidth: 40, align: 'right' },
    ];

    const rows = userReports.map((report) => ({
        id: report._id,
        date: report.date,
        title: report.title,
        skyStatus: report.skyStatus,
        shipStatus: report.shipStatus,
        windSpeed: report.windSpeed,
    }));

    return (
        <>
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {isLoading ? (
                    <>
                        <Grow in={isLoading} easing="ease-out" timeout={2000} appear={true}>
                            <CircularProgress sx={{ color: 'secondary.dark' }} size="52px" />
                        </Grow>
                    </>
                ) : (
                    <>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            {userReports.length === 0 ? (
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
                                        <p>User doesn&apos;t have any reports</p>
                                        <CustomButton
                                            variant="contained"
                                            sx={{ width: '100%' }}
                                            onClick={() => navigate(APP_ROUTES.ADD_REPORT)}
                                        >
                                            Add Report
                                        </CustomButton>
                                    </Container>
                                </>
                            ) : (
                                <Table stickyHeader>
                                    <TableHead
                                        sx={{ border: '2px dotted orange', backgroundColor: 'red' }}
                                    >
                                        <TableRow>
                                            {columns.map((column) => (
                                                <>
                                                    <TableCell
                                                        key={column.label}
                                                        align="center"
                                                        sx={{
                                                            backgroundColor: 'primary.dark',
                                                        }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                </>
                                            ))}
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell align="center">
                                                    {row.date.substring(0, 10)}
                                                </TableCell>
                                                <TableCell align="center">{row.title}</TableCell>
                                                <TableCell align="center">
                                                    {row.skyStatus}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.shipStatus}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {row.windSpeed}
                                                </TableCell>
                                                <TableCell align="center">
                                                    <ShowReportButton />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            )}
                        </TableContainer>
                    </>
                )}
            </Container>
        </>
    );
};

export default ReportsListPage;
