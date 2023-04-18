import React, { useEffect, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import Container from '@mui/material/Container';
import { API_ROUTES } from '../utils/constants';
import ShowReportButton from '../components/ShowReportButton/ShowReportButton.jsx';

const ReportsListPage = () => {
    // TODO: set the max width to unable the scrollbar to list of the reports (needs to set the maxWidth)

    const [userReports, setUserReports] = useState([]);

    const fetchReports = async () => {
        const response = await fetch(API_ROUTES.REPORTS, {
            headers: {
                method: 'post',
                'content-type': 'application/json',
                token: localStorage.getItem('token'),
            },
        })
            .then((res) => res.json())
            .catch((e) => console.log(e));
        setUserReports(response.content);
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
        <Container
            maxWidth="xl"
            sx={
                {
                    // border: 1,
                    // height: '80vh',
                }
            }
        >
            <TableContainer sx={{}}>
                <Table stickyHeader>
                    <TableHead sx={{ border: '1px dotted yellow' }}>
                        <TableRow
                            sx={
                                {
                                    // border: '1px dotted #ffff12'
                                }
                            }
                        >
                            {columns.map((column) => (
                                <>
                                    <TableCell
                                        key={column.label}
                                        align="center"
                                        style={{
                                            borderBottom: '1px solid white',
                                            backgroundColor: 'transparent',
                                        }}
                                    >
                                        {column.label}
                                    </TableCell>
                                </>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody
                        sx={
                            {
                                // maxHeight: '300px',
                                // border: '1px dotted yellow',
                                // backgroundColor: 'red',
                            }
                        }
                    >
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align="center">{row.date.substring(0, 10)}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.skyStatus}</TableCell>
                                <TableCell align="center">{row.shipStatus}</TableCell>
                                <TableCell align="center">{row.windSpeed}</TableCell>
                                <TableCell align="center">
                                    <ShowReportButton />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ReportsListPage;
