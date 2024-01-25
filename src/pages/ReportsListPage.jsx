import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

import Container from '@mui/material/Container';
import Grow from '@mui/material/Grow';
import CircularProgress from '@mui/material/CircularProgress';
import {
    BsCloudRainHeavyFill,
    BsFillSunFill,
    BsWind,
    BsFillCloudSnowFill,
    BsFillCloudsFill,
    BsFillCloudFill,
} from 'react-icons/bs';
import { BiErrorCircle } from 'react-icons/bi';
import { APP_ROUTES } from '../utils/constants';
import ShowReportButton from '../components/ShowReportButton/ShowReportButton.jsx';
import CustomButton from '../components/styled-components/CustomButton.jsx';
import { ReportContext } from '../contexts/ReportContext.jsx';

const ReportsListPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate(APP_ROUTES.LOGIN);
        }
    });

    const { fetchReports, userReports, isLoading } = useContext(ReportContext);

    const showSkyStatusIcon = (value) => {
        if (value === 'rain') return <BsCloudRainHeavyFill />;
        if (value === 'sun') return <BsFillSunFill />;
        if (value === 'wind') return <BsWind />;
        if (value === 'snow') return <BsFillCloudSnowFill />;
        if (value === 'heavy-clouds') return <BsFillCloudsFill />;
        if (value === 'clouds') return <BsFillCloudFill />;
        return <BiErrorCircle />;
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
                                                    {row.date.substring(0, 10)}
                                                </TableCell>
                                                <TableCell sx={{ maxWidth: '300px' }} align="center">
                                                    {row.title}
                                                </TableCell>
                                                <TableCell sx={{ maxWidth: '300px' }} align="center">
                                                    {showSkyStatusIcon(row.skyStatus)}
                                                </TableCell>
                                                <TableCell sx={{ maxWidth: '300px' }} align="center">
                                                    {row.shipStatus}
                                                </TableCell>
                                                <TableCell sx={{ maxWidth: '300px' }} align="center">
                                                    {row.windSpeed}
                                                </TableCell>
                                                <TableCell sx={{ maxWidth: '300px' }} align="center">
                                                    <ShowReportButton reportId={row.id} />
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
