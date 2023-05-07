import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import {
    BsCloudRainHeavyFill,
    BsFillSunFill,
    BsWind,
    BsFillCloudSnowFill,
    BsFillCloudsFill,
    BsFillCloudFill,
} from 'react-icons/bs';

import { BiErrorCircle } from 'react-icons/bi';

import { ReportContext } from '../contexts/ReportContext';
import dateAndTimeFormatter from '../utils/dateAndTimeFormatter';

const showSkyStatusIcon = (value) => {
    if (value === 'rain') return <BsCloudRainHeavyFill />;
    if (value === 'sun') return <BsFillSunFill />;
    if (value === 'wind') return <BsWind />;

    if (value === 'snow') return <BsFillCloudSnowFill />;
    if (value === 'heavy-clouds') return <BsFillCloudsFill />;
    if (value === 'clouds') return <BsFillCloudFill />;
    return <BiErrorCircle />;
};

const ReportPage = () => {
    const { reportId } = useParams();
    const { getReportById } = useContext(ReportContext);
    const [report, setReport] = useState({});

    useEffect(() => {
        const fetchReport = async () => {
            const { content } = await getReportById(reportId);
            setReport(content);
        };
        fetchReport();
    }, []);

    return (
        <>
            <Paper elevation={10} sx={{ backgroundColor: 'primary.light' }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: '70vh',
                        p: 2,
                        minWidth: '80vw',
                    }}
                >
                    <Stack
                        direction="column"
                        sx={{
                            width: '100%',
                            p: 3,
                        }}
                        spacing={2}
                    >
                        <Typography variant="h5" align="right">
                            {report.date && dateAndTimeFormatter(report.date)}
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                px: 3,
                                mt: 0,
                            }}
                        >
                            {report.title}
                        </Typography>
                        <Grid
                            container
                            columns={12}
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                px: 10,
                                py: 1,
                            }}
                        >
                            <Grid item xl={3} sx={{ position: 'relative' }}>
                                <Typography variant="body1" sx={{ position: 'absolute', top: '-19px', left: '-35px' }}>
                                    Ship status:
                                </Typography>
                                <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
                                    {report.shipStatus}
                                </Typography>
                            </Grid>
                            <Grid item xl={3} sx={{ position: 'relative' }}>
                                <Typography variant="body1" sx={{ position: 'absolute', top: '-19px', left: '-35px' }}>
                                    Weather:
                                </Typography>
                                <Typography variant="h4" sx={{ fontSize: '2rem' }}>
                                    {showSkyStatusIcon(report.skyStatus)}
                                </Typography>
                            </Grid>
                            <Grid item xl={3} sx={{ position: 'relative' }}>
                                <Typography
                                    variant="body1"
                                    sx={{ position: 'absolute', top: '-19px', left: '-15px', whiteSpace: 'nowrap' }}
                                >
                                    Wind Speed:
                                </Typography>
                                <Typography variant="h4">{report.windSpeed} m/s</Typography>
                            </Grid>
                            <Grid
                                item
                                xl={3}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '5px',
                                    position: 'relative',
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ position: 'absolute', top: '-19px', left: '-45px', whiteSpace: 'nowrap' }}
                                >
                                    Ship Localization:
                                </Typography>
                                <Typography variant="h4"> {report.shipLocalization} </Typography>
                                {/* <VisibilityIcon /> */}
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            columns={12}
                            sx={{
                                // border: '1px dashed orange',
                                width: '100%',
                                justifyContent: 'space-evenly',
                                px: 6,
                                py: 1,
                            }}
                        >
                            <Grid item xl={3} sx={{ position: 'relative' }}>
                                <Typography variant="body1" sx={{ position: 'absolute', top: '-19px', left: '-15px' }}>
                                    Start:
                                </Typography>
                                <Typography variant="h4">{report.startHarbour}</Typography>
                            </Grid>
                            <Grid item xl={3} sx={{ position: 'relative' }}>
                                <Typography variant="body1" sx={{ position: 'absolute', top: '-19px', left: '-15px' }}>
                                    Destination:
                                </Typography>
                                <Typography variant="h4">{report.destinationHarbour}</Typography>
                            </Grid>
                            <Grid item xl={3} sx={{ position: 'relative' }}>
                                <Typography
                                    variant="body1"
                                    sx={{ position: 'absolute', top: '-19px', left: '-30px', whiteSpace: 'nowrap' }}
                                >
                                    Watch Officer:
                                </Typography>
                                <Typography variant="h4">{report.watchOfficer}</Typography>
                            </Grid>
                            <Grid item xl={3} sx={{ position: 'relative' }}>
                                <Typography
                                    variant="body1"
                                    sx={{ position: 'absolute', top: '-19px', left: '-25px', whiteSpace: 'nowrap' }}
                                >
                                    Watch Number:
                                </Typography>
                                <Typography variant="h4">{report.watchNumber}</Typography>
                            </Grid>
                        </Grid>
                        <Typography
                            variant="body1"
                            sx={{
                                maxHeight: '450px',
                                overflow: 'hidden',
                                overflowY: 'auto',
                                py: 1,
                                px: 3,
                                whiteSpace: 'pre-wrap',
                            }}
                        >
                            {report.content}
                        </Typography>
                    </Stack>
                </Container>
            </Paper>
        </>
    );
};
export default ReportPage;
