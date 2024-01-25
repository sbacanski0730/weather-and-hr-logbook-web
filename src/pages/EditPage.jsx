import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';

import InputAdornment from '@mui/material/InputAdornment';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import {
    BsCloudRainHeavyFill,
    BsFillSunFill,
    BsWind,
    BsFillCloudSnowFill,
    BsFillCloudsFill,
    BsFillCloudFill,
} from 'react-icons/bs';
import { CircularProgress, Grow, Typography } from '@mui/material';
import { ReportContext } from '../contexts/ReportContext.jsx';

import CustomTimePicker from '../components/styled-components/CustomTimePicker.jsx';
import CustomDatePicker from '../components/styled-components/CustomDatePicker.jsx';
import CustomButton from '../components/styled-components/CustomButton.jsx';
import CustomTitleTextField from '../components/styled-components/CustomTitleTextField.jsx';
import CustomTextField from '../components/styled-components/CustomTextField.jsx';
import { API_ROUTES, APP_ROUTES } from '../utils/constants';

const EditPage = () => {
    const { id: reportId } = useParams();
    const navigate = useNavigate();
    const { getReportById, updateReport } = useContext(ReportContext);
    const [info, setInfo] = useState('');
    const [infoColor, setInfoColor] = useState('green');
    const [isLoading, setIsLoading] = useState(false);
    const [editingReport, setEditingReport] = useState({
        id: '',
        title: '',
        date: '',
        skyStatus: '',
        shipStatus: '',
        windSpeed: '',
        shipLocalization: '',
        startHarbour: '',
        destinationHarbour: '',
        watchNumber: '',
        watchOfficer: '',
        content: '',
    });
    const [error] = useState({
        title_error: false,
        date_error: false,
        time_error: false,
        sky_status_error: false,
        ship_status_error: false,
        wind_speed_error: false,
        ship_localization_error: false,
        content_error: false,
    });

    const handleUpdateReport = async () => {
        try {
            setInfoColor('green');
            const response = await updateReport(editingReport);
            if (response.status) setInfo('Report updated');
            setTimeout(() => setInfo(''), 5000);
        } catch (err) {
            setInfoColor('red');
            setInfo('Problem with update');
            setTimeout(() => setInfo(''), 5000);
        }
    };

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate(APP_ROUTES.LOGIN);
        }
    });

    useEffect(() => {
        setIsLoading(true);
        const getReportToEdit = async () => {
            const response = await getReportById(reportId);
            if (!response.status) navigate(API_ROUTES.ERROR);
            setEditingReport(response.content);
        };
        getReportToEdit(reportId);
        setIsLoading(false);
    }, []);

    if (isLoading)
        return (
            <>
                <Grow in={isLoading} easing="ease-out" timeout={2000} appear={true}>
                    <CircularProgress sx={{ color: 'secondary.dark' }} size="52px" />
                </Grow>
            </>
        );

    return (
        <>
            <Paper elevation={10} sx={{ backgroundColor: 'primary.light' }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        flex: 'display',
                        flexDirection: 'column',
                        p: 2,
                        height: '70vh',
                    }}
                >
                    <Stack
                        direction="column"
                        sx={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'start',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                            }}
                        >
                            <CustomTitleTextField
                                fullWidth
                                focused={true}
                                value={editingReport.title}
                                error={!!error.title_error}
                                label="Title"
                                variant="standard"
                                type="text"
                                sx={{ fontSize: '36px' }}
                                onChange={(e) => setEditingReport({ ...editingReport, title: e.target.value })}
                            />
                        </Box>
                        <Grid
                            container
                            direction="row"
                            column={12}
                            sx={{
                                height: '100%',
                            }}
                        >
                            <Grid
                                item
                                sm={12}
                                md={12}
                                lg={6}
                                sx={{
                                    display: 'flex',
                                    p: 2,
                                }}
                            >
                                <Stack
                                    sx={{
                                        width: '100%',
                                    }}
                                    spacing={1}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            gap: '5px',
                                        }}
                                    >
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <CustomDatePicker
                                                label="Date"
                                                fullWidth
                                                error={true}
                                                format="YYYY-MM-DD"
                                                value={dayjs(editingReport.date)}
                                                slotProps={{
                                                    textField: {
                                                        variant: 'outlined',
                                                        fullWidth: true,
                                                        size: 'small',
                                                    },
                                                }}
                                                inputFormat="dd-MM-yyyy"
                                                onChange={(e) => {
                                                    setEditingReport({
                                                        ...editingReport,
                                                        date: dayjs(e).format('YYYY-MM-DDTHH:mm'),
                                                    });
                                                }}
                                            />
                                        </LocalizationProvider>
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <CustomTimePicker
                                                fullWidth
                                                ampm={false}
                                                label="Time"
                                                // format="HH:mm"

                                                value={dayjs(editingReport.date)}
                                                slotProps={{
                                                    textField: {
                                                        variant: 'outlined',
                                                        fullWidth: true,
                                                        size: 'small',
                                                    },
                                                }}
                                                onChange={(e) => {
                                                    setEditingReport({
                                                        ...editingReport,
                                                        date: dayjs(e).format('YYYY-MM-DDTHH:mm'),
                                                    });
                                                }}
                                            />
                                        </LocalizationProvider>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            gap: '5px',
                                        }}
                                    >
                                        <CustomTextField
                                            fullWidth
                                            select
                                            focused={true}
                                            error={!!error.sky_status_error}
                                            value={editingReport.skyStatus}
                                            label="Sky Status"
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    sky_status: e.target.value,
                                                })
                                            }
                                        >
                                            {[
                                                {
                                                    value: 'rain',
                                                    icon: <BsCloudRainHeavyFill />,
                                                },
                                                { value: 'sun', icon: <BsFillSunFill /> },
                                                { value: 'wind', icon: <BsWind /> },
                                                {
                                                    value: 'snow',
                                                    icon: <BsFillCloudSnowFill />,
                                                },
                                                {
                                                    value: 'heavy-clouds',
                                                    icon: <BsFillCloudsFill />,
                                                },
                                                {
                                                    value: 'clouds',
                                                    icon: <BsFillCloudFill />,
                                                },
                                            ].map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.icon}
                                                </MenuItem>
                                            ))}
                                        </CustomTextField>
                                        <CustomTextField
                                            fullWidth
                                            select
                                            error={!!error.ship_status_error}
                                            value={editingReport.shipStatus}
                                            label="Ship status"
                                            focused={true}
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    ship_status: e.target.value,
                                                })
                                            }
                                        >
                                            <MenuItem key="In harbor" value="in harbor">
                                                In harbor
                                            </MenuItem>
                                            <MenuItem key="at sea" value="at sea">
                                                At sea
                                            </MenuItem>
                                        </CustomTextField>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            gap: '5px',
                                        }}
                                    >
                                        <CustomTextField
                                            fullWidth
                                            label="Wind speed"
                                            focused={true}
                                            value={editingReport.windSpeed}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">km/h</InputAdornment>,
                                            }}
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    wind_speed: e.target.value,
                                                })
                                            }
                                        />

                                        <CustomTextField
                                            fullWidth
                                            label="Localization"
                                            focused={true}
                                            value={editingReport.shipLocalization}
                                            error={!!error.ship_localization_error}
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    ship_localization: e.target.value,
                                                })
                                            }
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            gap: '5px',
                                        }}
                                    >
                                        <CustomTextField
                                            fullWidth
                                            label="Start Harbour"
                                            focused={true}
                                            value={editingReport.startHarbour}
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    startHarbour: e.target.value,
                                                })
                                            }
                                        />

                                        <CustomTextField
                                            fullWidth
                                            focused={true}
                                            value={editingReport.destinationHarbour}
                                            label="Destination Harbour"
                                            error={!!error.ship_localization_error}
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    destinationHarbour: e.target.value,
                                                })
                                            }
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            // border: '1px dashed pink',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            gap: '5px',
                                        }}
                                    >
                                        <CustomTextField
                                            fullWidth
                                            focused={true}
                                            value={editingReport.watchOfficer}
                                            label="Watch Officer"
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    watchOfficer: e.target.value,
                                                })
                                            }
                                        />

                                        <CustomTextField
                                            fullWidth
                                            label="Watch Number"
                                            focused={true}
                                            error={!!error.ship_localization_error}
                                            value={editingReport.watchNumber}
                                            onChange={(e) =>
                                                setEditingReport({
                                                    ...editingReport,
                                                    watchNumber: e.target.value,
                                                })
                                            }
                                        />
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={12}
                                lg={6}
                                sx={{
                                    p: 2,
                                }}
                            >
                                <CustomTextField
                                    fullWidth
                                    value={editingReport.content}
                                    multiline
                                    onChange={(e) =>
                                        setEditingReport({
                                            ...editingReport,
                                            content: e.target.value,
                                        })
                                    }
                                    sx={{
                                        height: '100%',
                                        '& fieldset': {
                                            display: 'none',
                                        },
                                    }}
                                    InputProps={{
                                        sx: {
                                            height: '100%',
                                            alignItems: 'flex-start',
                                            overflowY: 'scroll',
                                            maxHeight: '580px',
                                            '@media screen and (max-width: 1200px)': {
                                                maxHeight: '200px',
                                            },
                                        },
                                    }}
                                    inputProps={{
                                        sx: {
                                            height: '100%',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'end',
                                alignItems: 'center',
                                px: 2,
                                gap: '10px',
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 600, color: `${infoColor}` }}>
                                {info}
                            </Typography>
                            <CustomButton variant="contained" onClick={handleUpdateReport}>
                                Update
                            </CustomButton>
                        </Box>
                    </Stack>
                </Container>
            </Paper>
        </>
    );
};

export default EditPage;
